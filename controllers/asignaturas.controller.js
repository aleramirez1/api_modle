const service = require('../services/asignaturas.service');

module.exports = {
  obtener: async (req, res) => {
    const data = await service.getAll();
    res.json(data);
  }
};
