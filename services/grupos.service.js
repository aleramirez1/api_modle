const db = require('../config/db');

module.exports = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT g.id, g.nombre, a.nombre AS asignatura, d.nombre AS docente
      FROM grupos g
      LEFT JOIN asignaturas a ON g.asignatura_id = a.id
      LEFT JOIN docentes d ON g.docente_id = d.id
    `);
    return rows;
  }
};
