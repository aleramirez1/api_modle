const service = require('../services/docentes.service');

module.exports = {
  obtener: async (req, res) => {
    try {
      const data = await service.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener docentes', detalle: error.message });
    }
  },

  obtenerPorId: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await service.getById(id);
      if (!data) {
        return res.status(404).json({ error: 'Docente no encontrado' });
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener docente', detalle: error.message });
    }
  },

  crear: async (req, res) => {
    try {
      const { nombre, asignatura_id, cuatrimestre, programa_id } = req.body;
      
      if (!nombre) {
        return res.status(400).json({ error: 'El nombre es requerido' });
      }

      const data = await service.create({
        nombre,
        asignatura_id,
        cuatrimestre,
        programa_id
      });
      res.status(201).json({ mensaje: 'Docente creado exitosamente', data });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear docente', detalle: error.message });
    }
  },

  actualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, asignatura_id, cuatrimestre, programa_id } = req.body;

      const existe = await service.getById(id);
      if (!existe) {
        return res.status(404).json({ error: 'Docente no encontrado' });
      }

      const data = await service.update(id, {
        nombre: nombre || existe.nombre,
        asignatura_id: asignatura_id || existe.asignatura_id,
        cuatrimestre: cuatrimestre !== undefined ? cuatrimestre : existe.cuatrimestre,
        programa_id: programa_id || existe.programa_id
      });
      res.json({ mensaje: 'Docente actualizado exitosamente', data });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar docente', detalle: error.message });
    }
  },

  eliminar: async (req, res) => {
    try {
      const { id } = req.params;
      const existe = await service.getById(id);
      if (!existe) {
        return res.status(404).json({ error: 'Docente no encontrado' });
      }
      const eliminado = await service.delete(id);
      if (eliminado) {
        res.json({ mensaje: 'Docente eliminado exitosamente' });
      } else {
        res.status(500).json({ error: 'No se pudo eliminar el docente' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar docente', detalle: error.message });
    }
  }
};
