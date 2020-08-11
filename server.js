const express = require('express');
const path = require('path');
const cors = require('cors');
const decrypt_ = require('./helpers/rsaDecrypt');
// const mongoose = require('mongoose');

const app = express();
// const mongoURL = "mongodb://127.0.0.1:27017/test";
const index = require('./routes/index.route')
const verifyJWT = require('./helpers/verifyJWT');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/', index);

app.post('/check',(req,res) => {
    const { payload } = req.body;
    res.send(decrypt_(payload));
})
// const db = require('./models/firebaseSDK').db;
// const lol = async () => {
//     await db.batch().delete(db.collection('users').doc('genesis'))
//     await db.collection("users").doc('genesis').set({
//         'name': 'genesis',
//         'info': {
//             'lol': true
//         }
//     });
//     const data =await db.collection('users').doc('genesis').get()
//     console.log(data.data())
// }
// lol()
// mongoose.connect(mongoURL,{useNewUrlParser: true});
// mongoose.connection.once('open',()=>{
//     console.log('MongoDB connected');
// });

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if (!err) {
        console.log(`Listening on port ${port}`);
    }
});