// server.js
import express from 'express';
import bodyParser from 'body-parser';
import smart from './node_modules/address-smart-parse/smart.js';
import addressCode from './node_modules/address-smart-parse/lib/addressCode.js';
import zipCode from './node_modules/address-smart-parse/lib/zipCode.js';

const app = express();
const PORT = 3004;

// 使用中间件解析 JSON 请求体
app.use(bodyParser.json());

app.post('/parse_address', (req, res) => {
    const { address } = req.body;

    if (!address || typeof address !== 'string') {
        return res.status(400).json({
            error: 'Missing or invalid "address" field in request body.'
        });
    }

    try {
        // 使用 smart 方法解析地址
        const result = smart(address, addressCode);
        // res.json(result);
        res.json({
            success: true,
            response_text: result
        });
    } catch (err) {
        console.error('Error parsing address:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});