const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/user/login', userController.login_post);

module.exports = router;