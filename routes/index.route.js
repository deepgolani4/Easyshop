const router = require('express').Router();

// Import Controllers Here
const user = require('../controllers/users.controller');

//Index Route
router.get('/',(req,res)=>{
    res.send('Index Route');
});


// User Routes
router.post('/users/add',user.addUser);
router.delete('/users',user.deleteUser);
router.put('/users',user.updateUser);

//Login

module.exports = router;