const router = require('express').Router();


const user = require('../controllers/users.controller');

router.get('/',(req,res)=>{
    res.send('Index Route');
});

router.post('/users/add',user.addUser);


module.exports = router;