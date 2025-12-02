const router = require('express').Router();
const controller = require('../controllers/docentes.controller');

router.get('/', controller.obtener);

module.exports = router;
