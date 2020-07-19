require('dotenv').config()
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const tkn = req.headers.authorization;

    if (typeof tkn !== "undefined") {
        jwt.verify(tkn, config.auth.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.send("JWTVerifyFailed").status(401);
            }
            req.authUserId = decoded;
            next();
        });

    } else {
        return res.send("noAuthHeader").status(403);
    }
}