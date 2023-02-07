const { Router } = require('express');
const adminController = require('../controllers/adminController');
const userMiddleware = require('../middleware/userMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = Router();

router.get('/user/get/:id', userMiddleware.checkUser, adminMiddleware.checkAdmin ,adminController.getUser);
router.post('/user/create', userMiddleware.checkUser, adminMiddleware.checkAdmin ,adminController.insertUser);
router.put('/user/update/:id', userMiddleware.checkUser, adminMiddleware.checkAdmin ,adminController.updateUser);
router.delete('/user/delete/:id', userMiddleware.checkUser, adminMiddleware.checkAdmin ,adminController.deleteUser);
router.put('/user/ban/:id', userMiddleware.checkUser, adminMiddleware.checkAdmin ,adminController.banUser);
router.put('/user/unban/:id', userMiddleware.checkUser, adminMiddleware.checkAdmin ,adminController.unbanUser);
router.put('/user/promote/:id', userMiddleware.checkUser, adminMiddleware.checkAdmin ,adminController.promoteUser);
router.put('/user/demote/:id', userMiddleware.checkUser, adminMiddleware.checkAdmin ,adminController.demoteUser);

module.exports = router;