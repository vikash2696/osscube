const router = require('express').Router();
const userController = require('../controllers/user');
const courseController = require('../controllers/course');

console.log('Index router');
router.use('/user', userController);
router.use('/course', courseController);


module.exports = router;
