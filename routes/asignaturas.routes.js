const router = require('express').Router();
const controller = require('../controllers/asignaturas.controller');

router.get('/', controller.obtener);

module.exports = router;
