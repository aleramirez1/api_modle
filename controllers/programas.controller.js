const service = require('../services/programas.service');

async function obtener(req, res) {
  try {
    const data = await service.obtener();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function crear(req, res) {
  try {
    const data = await service.crear(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { obtener, crear };
