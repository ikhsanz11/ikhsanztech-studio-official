// Vercel Serverless Function: Create Midtrans Transaction
// POST /api/create-transaction

import type { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';

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

// Helper to set CORS headers
function setCorsHeaders(res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
}

// Helper function to make HTTPS request
function httpsRequest(url: string, options: https.RequestOptions, data: string): Promise<{ status: number; body: string }> {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => resolve({ status: res.statusCode || 500, body }));
        });
        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers for all requests
    setCorsHeaders(res);

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const body = req.body as TransactionRequest;
        const { productId, productName, productPrice, customerName, customerEmail, customerPhone } = body;

        // Validate required fields
        if (!productId || !productName || !productPrice || !customerName || !customerEmail) {
            return res.status(400).json({
                error: 'Missing required fields',
                received: { productId, productName, productPrice, customerName, customerEmail }
            });
        }

        // Generate unique order ID
        const orderId = `ORDER-${productId.toUpperCase()}-${Date.now()}`;

        // Get base URL for callback
        const baseUrl = 'https://ikhsanztech.com';

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
                    name: productName.substring(0, 50),
                },
            ],
            customer_details: {
                first_name: customerName,
                email: customerEmail,
                phone: customerPhone || '',
            },
            callbacks: {
                finish: `${baseUrl}/payment-success?order_id=${orderId}`,
            },
        };

        // Get Server Key from environment
        const serverKey = process.env.MIDTRANS_SERVER_KEY;
        if (!serverKey) {
            console.error('MIDTRANS_SERVER_KEY not found');
            return res.status(500).json({ error: 'Server key not configured' });
        }

        // Create authorization header (Base64 encoded server key)
        const authHeader = Buffer.from(`${serverKey}:`).toString('base64');

        // Prepare request
        const postData = JSON.stringify(transactionPayload);
        const urlObj = new URL(MIDTRANS_SNAP_URL);

        const options: https.RequestOptions = {
            hostname: urlObj.hostname,
            port: 443,
            path: urlObj.pathname,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Basic ${authHeader}`,
                'Content-Length': Buffer.byteLength(postData),
            },
        };

        console.log('Calling Midtrans API:', urlObj.hostname);

        // Call Midtrans Snap API
        const response = await httpsRequest(MIDTRANS_SNAP_URL, options, postData);
        const data = JSON.parse(response.body);

        if (response.status !== 201 && response.status !== 200) {
            console.error('Midtrans API Error:', data);
            return res.status(response.status).json({
                error: 'Failed to create transaction',
                details: data
            });
        }

        console.log('Transaction created:', orderId);

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
