const db = require('../models/firebaseSDK').db;
const blake2b = require('blakejs').blake2bHex;

module.exports = {
    addUser : async (req,res) => {
        const { name, email, password } = req.body;

        await db.collection('users').doc(blake2b(name).slice(0,10)).set({
            name,
            email,
            password:blake2b(password)
        }).then((data)=>{
            console.log(data);
            res.send('success').status(200);
        }).catch((err)=>{
            console.log(err);
            res.send('error').status(503);
        })
    },

    deleteUser : async (req,res) => {
        const { name } = req.body;

        await db.batch().delete(db.collection('users').doc(blake2b(name).slice(0,10)))
    }
}