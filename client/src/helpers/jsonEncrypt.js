const cryptoJS = require('crypto-js');

const encrypt_ = (data,public) => {
    const _ = JSON.stringify(data);

    const ret_ = cryptoJS.AES.encrypt(_,'public key')
}
