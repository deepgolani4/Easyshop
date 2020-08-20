const router = require('express').Router();
const decrypt_ = require('../helpers/rsaDecrypt').decrypt_;

// Import Controllers Here
const user = require('../controllers/users.controller');
const login = require('../controllers/login.controller');

//Index Route
router.get('/',(req,res)=>{
    res.send('Index Route');
});


// User Routes
router.post('/adduser',user.addUser);

//Login
router.post('/login',decrypt_,login.login);


module.exports = router;