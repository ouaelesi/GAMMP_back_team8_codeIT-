const { Router } = require('express');
const userMiddleware = require('../Middleware/userMiddleware');
const userController = require('../controllers/userController');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = Router();

router.put('/user/updateProfile/:id', userController.updateProfile);
router.get('/user/login', userController.login_get);
router.post('/user/login', userController.login_post);

router.get('/user/testUser', userMiddleware.checkUser, adminMiddleware.checkAdmin ,(req, res) => {
    res.json({message: 'test done'});
});

module.exports = router;