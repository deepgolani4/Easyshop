const blake2b = require('blakejs').blake2bHex;
require('dotenv').config;
const db = require('../models/firebaseSDK').db;

module.exports = {
    login:(req,res) => {
        const { email,password } = req.body;

        db.collection('users').doc(blake2b(email).slice(0,10)).get().then((data)=>{
            console.log(data.data())
        })

        res.send('success')
    }
}