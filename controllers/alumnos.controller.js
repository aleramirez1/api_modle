const service = require('../services/alumnos.service');

module.exports = {
  obtener: async (req, res) => {
    const data = await service.getAll();
    res.json(data);
  }
};


