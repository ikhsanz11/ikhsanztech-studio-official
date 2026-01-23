// Vercel Serverless Function: Create Midtrans Transaction
// POST /api/create-transaction

import type { VercelRequest, VercelResponse } from '@vercel/node';

// Midtrans Snap API configuration
const MIDTRANS_SNAP_URL = process.env.MIDTRANS_IS_PRODUCTION === 'true'
    ? 'https://app.midtrans.com/snap/v1/transactions'
    : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

interface TransactionRequest {
    productId: string;
    productName: string;
    productPrice: number;
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { productId, productName, productPrice, customerName, customerEmail, customerPhone } = req.body as TransactionRequest;

        // Validate required fields
        if (!productId || !productName || !productPrice || !customerName || !customerEmail) {
            return res.status(400).json({
                error: 'Missing required fields: productId, productName, productPrice, customerName, customerEmail'
            });
        }

        // Generate unique order ID
        const orderId = `ORDER-${productId.toUpperCase()}-${Date.now()}`;

        // Midtrans transaction payload
        const transactionPayload = {
            transaction_details: {
                order_id: orderId,
                gross_amount: productPrice,
            },
            item_details: [
                {
                    id: productId,
                    price: productPrice,
                    quantity: 1,
                    name: productName.substring(0, 50), // Midtrans limit 50 chars
                },
            ],
            customer_details: {
                first_name: customerName,
                email: customerEmail,
                phone: customerPhone || '',
            },
            callbacks: {
                finish: `${process.env.VERCEL_URL || 'http://localhost:5173'}/payment-success?order_id=${orderId}`,
            },
        };

        // Get Server Key from environment
        const serverKey = process.env.MIDTRANS_SERVER_KEY;
        if (!serverKey) {
            return res.status(500).json({ error: 'Midtrans server key not configured' });
        }

        // Create authorization header (Base64 encoded server key)
        const authHeader = Buffer.from(`${serverKey}:`).toString('base64');

        // Call Midtrans Snap API
        const response = await fetch(MIDTRANS_SNAP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${authHeader}`,
            },
            body: JSON.stringify(transactionPayload),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Midtrans API Error:', data);
            return res.status(response.status).json({
                error: 'Failed to create transaction',
                details: data
            });
        }

        // Return snap token and redirect URL
        return res.status(200).json({
            success: true,
            token: data.token,
            redirect_url: data.redirect_url,
            order_id: orderId,
        });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
