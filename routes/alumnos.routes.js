const router = require('express').Router();
const controller = require('../controllers/alumnos.controller');

router.get('/', controller.obtener);

module.exports = router;
