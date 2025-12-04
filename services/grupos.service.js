const db = require('../config/db');

module.exports = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT 
        id_grupo,
        nombre_grupo AS nombre,
        nombre_de_asignatura AS asignatura,
        nombre_docente AS docente,
        alumnos
      FROM grupos
    `);
    return rows;
  }
};
