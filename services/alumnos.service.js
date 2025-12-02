const db = require('../config/db');

module.exports = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM alumnos');
    return rows;
  }
};
