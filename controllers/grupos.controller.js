const service = require('../services/grupos.service');

module.exports = {
  obtener: async (req, res) => {
    const data = await service.getAll();
    res.json(data);
  }
};
