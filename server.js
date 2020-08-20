const express = require('express');
const path = require('path');
const cors = require('cors');
const decrypt_ = require('./helpers/rsaDecrypt').decrypt_;
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

app.post('/check',decrypt_,(req,res) => {
    // const { payload } = req.body;
    res.send(req.body);
});

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if (!err) {
        console.log(`Listening on port ${port}`);
    }
});