const router = require('express').Router();
const controller = require('../controllers/programas.controller');

router.get('/', controller.obtener);
router.post('/', controller.crear);

module.exports = router;
