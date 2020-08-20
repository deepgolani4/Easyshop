const NodeRSA = require('node-rsa');

const key = new NodeRSA();

key.importKey(`-----BEGIN OPENSSH PRIVATE KEY-----
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
-----END OPENSSH PRIVATE KEY-----`, 'openssh-private')


module.exports = {
    decrypt_: (req, res, next) => {
        const data = req.body.payload;
        try {
            const decoded_ = JSON.parse(key.decrypt(data, 'utf8'));
            req.body = decoded_;
        } catch(err) {
            return res.status(503).send('RSADecryptError');
        }

        next();
    }
}