const router = require('express').Router();
const controller = require('../controllers/docentes.controller');

// CRUD Routes
router.get('/', controller.obtener);                    // Obtener todos
router.get('/:id', controller.obtenerPorId);           // Obtener por ID
router.post('/', controller.crear);                     // Crear nuevo
router.put('/:id', controller.actualizar);             // Actualizar
router.delete('/:id', controller.eliminar);            // Eliminar

module.exports = router;
