const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const mongoURL = "mongodb://127.0.0.1:27017/test";
const index = require('./routes/index.route')
const verifyJWT = require('./helpers/verifyJWT');

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use('/',verifyJWT,index);


mongoose.connect(mongoURL,{useNewUrlParser: true});
mongoose.connection.once('open',()=>{
    console.log('MongoDB connected');
});

const port = process.env.PORT || 3000;

app.listen(port,(err)=>{
    if(!err){
        console.log(`Listening on port ${port}`);
    }
});