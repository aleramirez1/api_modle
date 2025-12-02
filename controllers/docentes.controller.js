const service = require('../services/docentes.service');

module.exports = {
  obtener: async (req, res) => {
    const data = await service.getAll();
    res.json(data);
  }
};
