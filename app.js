const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // or your desired port

// Secret key received from YaYa Wallet during webhook registration
const SECRET_KEY = 'your_yaya_wallet_secret_key';

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const timestamp = req.get('X-YaYa-Timestamp');
    const signature = req.get('X-YaYa-Signature');

    // Verify the timestamp and signature
    if (!isValidSignature(timestamp, signature, JSON.stringify(req.body))) {
        return res.status(401).send('Invalid signature');
    }

    // Process the webhook payload (add your custom logic here)
    processWebhookData(req.body);

    // Quickly return a 2xx response
    res.status(200).send('Webhook received successfully');
});

function isValidSignature(timestamp, signature, payload) {
    // Generate a hash based on the payload and timestamp using the secret key
    const expectedSignature = crypto
        .createHmac('sha256', SECRET_KEY)
        .update(`${timestamp}${payload}`, 'utf8')
        .digest('hex');

    // Compare the expected signature with the received signature
    return crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(signature));
}

function processWebhookData(webhookData) {
    // Add your custom logic to process the webhook payload
    console.log('Processing webhook data:', webhookData);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
