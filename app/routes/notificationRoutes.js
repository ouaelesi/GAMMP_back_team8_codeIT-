const { Router } = require('express');
const notificationController = require('../controllers/notificationController');

const router = Router();

//setInterval(notoficationController.getUserspec, 3000);

setTimeout(notificationController.verifyInactiveMembers, 3000);

module.exports = router;