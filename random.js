const { resolve } = require('path');

const db = require('./models/firebaseSDK').db;

// db.collection('users').get().then((docs) => {
//   docs.forEach((doc) => {
//     console.log(doc.data())
//   })
// })

var a = () => {
  return new Promise((resolve) => {
    resolve(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 5].map((i, j) => {
        return {
          name: 'maggie',
          price: '20',
          image: '',
        };
      })
    );
  });
};

a().then((data) => {
  console.log(data);
});
