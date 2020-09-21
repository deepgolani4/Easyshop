const router = require('express').Router();

// Import Controllers Here
const user = require('../controllers/users.controller');

//Index Route
router.get('/', (req, res) => {
  res.send('Index Route');
});

// User Routes
router.delete('/users', user.deleteUser);
router.put('/users', user.updateUser);

module.exports = router;
