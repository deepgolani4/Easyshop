const router = require('express').Router();

// Import Controllers Here
const user = require('../controllers/users.controller');
const login = require('../controllers/login.controller');

//Index Route
router.get('/',(req,res)=>{
    res.send('Index Route');
});


// User Routes
router.post('/users/add',user.addUser);
router.delete('/users',user.deleteUser);
router.put('/users',user.updateUser);

//Login
router.post('/login',login.login);


module.exports = router;