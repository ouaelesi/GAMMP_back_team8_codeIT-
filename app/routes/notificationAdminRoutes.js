const { Router } = require('express');
const notificationAdminController = require('../controllers/notificationAdminController');

const router = Router();

// 86400 seconds = 24h

setInterval(notificationAdminController.verifyInactiveMembers, 86400*1000);

//to test the api use SetTimeout
// setTimeout(notificationAdminController.verifyInactiveMembers, 3000);

module.exports = router;