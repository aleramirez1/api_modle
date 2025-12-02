const db = require('../config/db');

module.exports = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT d.id, d.nombre, a.nombre AS asignatura
      FROM docente d
      LEFT JOIN asignaturas a ON d.asignatura_id = a.id
    `);
    return rows;
  }
};
