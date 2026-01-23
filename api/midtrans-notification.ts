// Vercel Serverless Function: Midtrans Payment Notification Webhook
// POST /api/midtrans-notification

import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

interface MidtransNotification {
    transaction_time: string;
    transaction_status: string;
    transaction_id: string;
    status_message: string;
    status_code: string;
    signature_key: string;
    payment_type: string;
    order_id: string;
    merchant_id: string;
    gross_amount: string;
    fraud_status?: string;
    currency: string;
}

// Verify Midtrans signature
function verifySignature(notification: MidtransNotification, serverKey: string): boolean {
    const { order_id, status_code, gross_amount, signature_key } = notification;
    const expectedSignature = crypto
        .createHash('sha512')
        .update(`${order_id}${status_code}${gross_amount}${serverKey}`)
        .digest('hex');
    return signature_key === expectedSignature;
}

// Send WhatsApp notification via WhatsApp Business API
async function sendWhatsAppNotification(
    orderId: string,
    productName: string,
    amount: string,
    customerName: string,
    customerEmail: string,
    status: string
): Promise<void> {
    const whatsappNumber = process.env.WHATSAPP_ADMIN_NUMBER || '6287877066270';
    const whatsappApiKey = process.env.WHATSAPP_API_KEY;
    const whatsappApiUrl = process.env.WHATSAPP_API_URL;

    // Format message
    const message = `🎉 *PEMBAYARAN BERHASIL!*

📦 *Order ID:* ${orderId}
🛒 *Produk:* ${productName}
💰 *Total:* Rp ${parseInt(amount).toLocaleString('id-ID')}

👤 *Customer:*
   Nama: ${customerName}
   Email: ${customerEmail}

⏰ Status: ${status}

_Silakan proses pesanan ini._`;

    // If WhatsApp Business API is configured
    if (whatsappApiKey && whatsappApiUrl) {
        try {
            await fetch(whatsappApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${whatsappApiKey}`,
                },
                body: JSON.stringify({
                    messaging_product: 'whatsapp',
                    to: whatsappNumber,
                    type: 'text',
                    text: { body: message },
                }),
            });
            console.log('WhatsApp notification sent successfully');
        } catch (error) {
            console.error('Failed to send WhatsApp notification:', error);
        }
    } else {
        // Log for manual check if API not configured
        console.log('WhatsApp API not configured. Notification:', message);
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const notification = req.body as MidtransNotification;
        const serverKey = process.env.MIDTRANS_SERVER_KEY;

        if (!serverKey) {
            console.error('Midtrans server key not configured');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Verify signature
        if (!verifySignature(notification, serverKey)) {
            console.error('Invalid signature');
            return res.status(403).json({ error: 'Invalid signature' });
        }

        const { order_id, transaction_status, gross_amount, fraud_status } = notification;

        // Extract product name from order_id (ORDER-PRODUCT-ID-TIMESTAMP)
        const productIdMatch = order_id.match(/ORDER-(.+)-\d+$/);
        const productId = productIdMatch ? productIdMatch[1].toLowerCase().replace(/-/g, '-') : 'Unknown';

        // Handle different transaction statuses
        let shouldNotify = false;
        let statusMessage = '';

        if (transaction_status === 'capture') {
            if (fraud_status === 'accept') {
                shouldNotify = true;
                statusMessage = '✅ Pembayaran Capture - Berhasil';
            }
        } else if (transaction_status === 'settlement') {
            shouldNotify = true;
            statusMessage = '✅ Pembayaran Settlement - Berhasil';
        } else if (transaction_status === 'pending') {
            statusMessage = '⏳ Menunggu Pembayaran';
        } else if (transaction_status === 'deny' || transaction_status === 'cancel' || transaction_status === 'expire') {
            statusMessage = `❌ Pembayaran ${transaction_status}`;
        }

        // Send WhatsApp notification for successful payments
        if (shouldNotify) {
            // Note: In real implementation, you'd store customer info during transaction creation
            // and retrieve it here. For now, we use placeholder values.
            await sendWhatsAppNotification(
                order_id,
                productId,
                gross_amount,
                'Customer', // Would be retrieved from database
                'customer@email.com', // Would be retrieved from database
                statusMessage
            );
        }

        console.log(`Transaction ${order_id}: ${statusMessage}`);

        // Return OK to Midtrans
        return res.status(200).json({
            status: 'OK',
            message: `Notification processed: ${statusMessage}`
        });

    } catch (error) {
        console.error('Webhook Error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
