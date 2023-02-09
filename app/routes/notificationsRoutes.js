const { Router } = require('express');
const notificationsController = require('../controllers/notificationsController');

const router = Router();


router.get('/notifications/get/:id', notificationsController.notification_get);
router.post('/notifications/create', notificationsController.notification_create);
router.put('/notifications/setRead/:id', notificationsController.notification_set_read);
router.delete('/notifications/delete/:id', notificationsController.notification_delete);

module.exports = router;  