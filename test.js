const db = require('./models/firebaseSDK').db;

db.collection('users').get().then((docs) => {
  docs.forEach((doc) => {
    console.log(doc.data())
  })
})