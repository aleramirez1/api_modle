const router = require('express').Router();
const controller = require('../controllers/grupos.controller');

router.get('/', controller.obtener);

module.exports = router;
