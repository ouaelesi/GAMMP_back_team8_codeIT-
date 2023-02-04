const { Router } = require('express');
const adminController = require('../controllers/adminController');

const router = Router();


router.get('/user/get/:id', adminController.getUser);
router.post('/user/create', adminController.insertUser);
router.put('/user/update/:id', adminController.updatetUser);
router.delete('/user/delete/:id', adminController.deleteUser);
router.put('/user/ban/:id', adminController.banUser);
router.put('/user/unban/:id', adminController.unbanUser);
router.put('/promote/d/:id', adminController.promoteUser);
router.put('/demote/delete/:id', adminController.demoteUser);

module.exports = router;