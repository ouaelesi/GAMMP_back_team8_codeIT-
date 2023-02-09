const { Router } = require('express');
const notificationAdminController = require('../controllers/notificationAdminController');

const router = Router();

// 86400 seconds = 24h

setInterval(notoficationController.verifyInactiveMembers, 86400);

//to test the api use SetTimeout
// setTimeout(notificationAdminController.verifyInactiveMembers, 3000);

module.exports = router;