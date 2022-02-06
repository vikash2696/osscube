const router = require('express').Router();
const userController = require('../controllers/user');
// const empController = require('../controllers/emplpoyee');

console.log('Index router');
router.use('/user', userController);
// router.use('/employee', empController);


module.exports = router;
