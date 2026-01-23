export default async function handler(req, res) {
    // Set CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const notification = req.body;
        console.log('Midtrans notification received:', JSON.stringify(notification, null, 2));

        const orderId = notification.order_id;
        const transactionStatus = notification.transaction_status;
        const fraudStatus = notification.fraud_status;

        // Check if payment is successful
        if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
            if (fraudStatus === 'accept' || !fraudStatus) {
                console.log(`Payment successful for order: ${orderId}`);

                const adminPhone = process.env.WHATSAPP_ADMIN_NUMBER || '6287877066270';
                const message = `🎉 Pembayaran Berhasil!\n\nOrder ID: ${orderId}\nStatus: ${transactionStatus}\nAmount: IDR ${notification.gross_amount}`;

                console.log(`Would send WhatsApp to ${adminPhone}: ${message}`);
            }
        }

        return res.status(200).json({ status: 'OK' });
    } catch (error) {
        console.error('Notification error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
