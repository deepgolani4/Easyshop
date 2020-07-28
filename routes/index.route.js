const router = require('express').Router();

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
router.post('/login',login.login);


module.exports = router;