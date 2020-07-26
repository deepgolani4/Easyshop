var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(require('./easyshop-ace15-firebase-adminsdk-8mf6o-6a6041a368.json')),
    // apiKey: "AIzaSyB0fjfgtpbNT-C2j88qdD1nM91Z2jY1YLg",
    // authDomain: "easyshop-ace15.firebaseapp.com",
    // databaseURL: "https://easyshop-ace15.firebaseio.com",
    // projectId: "easyshop-ace15",
    // storageBucket: "easyshop-ace15.appspot.com",
    // messagingSenderId: "761051852317",
    // appId: "1:761051852317:web:3399f55bc9093569b9a0f4",
    // measurementId: "G-DMEFXF0V47"
});

module.exports = {
    db:admin.firestore()
}