const https = require('https');

module.exports = async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { productId, productName, productPrice, customerName, customerEmail, customerPhone } = req.body;

        // Validate
        if (!productId || !productName || !productPrice || !customerName || !customerEmail) {
            return res.status(400).json({
                error: 'Missing required fields',
                received: { productId, productName, productPrice, customerName, customerEmail }
            });
        }

        const orderId = `ORDER-${productId.toUpperCase()}-${Date.now()}`;
        const baseUrl = 'https://ikhsanztech.com';

        const isProduction = process.env.MIDTRANS_IS_PRODUCTION === 'true';
        const snapHost = isProduction ? 'app.midtrans.com' : 'app.sandbox.midtrans.com';

        const payload = {
            transaction_details: {
                order_id: orderId,
                gross_amount: productPrice,
            },
            item_details: [{
                id: productId,
                price: productPrice,
                quantity: 1,
                name: productName.substring(0, 50),
            }],
            customer_details: {
                first_name: customerName,
                email: customerEmail,
                phone: customerPhone || '',
            },
            callbacks: {
                finish: `${baseUrl}/payment-success?order_id=${orderId}`,
            },
        };

        const serverKey = process.env.MIDTRANS_SERVER_KEY;
        if (!serverKey) {
            return res.status(500).json({ error: 'Server key not configured' });
        }

        const authHeader = Buffer.from(`${serverKey}:`).toString('base64');
        const postData = JSON.stringify(payload);

        const options = {
            hostname: snapHost,
            port: 443,
            path: '/snap/v1/transactions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Basic ${authHeader}`,
                'Content-Length': Buffer.byteLength(postData),
            },
        };

        const data = await new Promise((resolve, reject) => {
            const request = https.request(options, (response) => {
                let body = '';
                response.on('data', (chunk) => body += chunk);
                response.on('end', () => {
                    try {
                        resolve({ status: response.statusCode, data: JSON.parse(body) });
                    } catch (e) {
                        reject(new Error('Invalid JSON response: ' + body));
                    }
                });
            });
            request.on('error', reject);
            request.write(postData);
            request.end();
        });

        if (data.status !== 201 && data.status !== 200) {
            console.error('Midtrans Error:', data.data);
            return res.status(data.status).json({
                error: 'Failed to create transaction',
                details: data.data
            });
        }

        return res.status(200).json({
            success: true,
            token: data.data.token,
            redirect_url: data.data.redirect_url,
            order_id: orderId,
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message || 'Unknown error'
        });
    }
};
