const { Router } = require('express');
const activitiesController = require('../controllers/activitiesController');
const {requireManager} = require('../middleware/adminMiddleware');

const router = Router();


router.get('/activities/get/:id', requireManager, activitiesController.get);
router.post('/activities/create', requireManager, activitiesController.post);
router.put('/activities/update/:id', requireManager, activitiesController.put);
router.delete('/activities/delete/:id', requireManager, activitiesController.delete);

module.exports = router;