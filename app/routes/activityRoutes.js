const { Router } = require('express');
const activitiesController = require('../controllers/activitiesController');

const router = Router();


router.get('/activities/get/:id', activitiesController.get);
router.post('/activities/create', activitiesController.post);
router.put('/activities/update/:id', activitiesController.put);
router.delete('/activities/delete/:id', activitiesController.delete);

module.exports = router;