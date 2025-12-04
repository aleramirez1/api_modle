const db = require('../config/db');

module.exports = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT d.id, d.nombre, a.nombre AS asignatura, d.cuatrimestre, d.programa_id
      FROM docente d
      LEFT JOIN asignaturas a ON d.asignatura_id = a.id
      ORDER BY d.id ASC
    `);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query(`
      SELECT d.id, d.nombre, a.nombre AS asignatura, d.cuatrimestre, d.programa_id
      FROM docente d
      LEFT JOIN asignaturas a ON d.asignatura_id = a.id
      WHERE d.id = ?
    `, [id]);
    return rows[0] || null;
  },

  create: async (data) => {
    const { nombre, asignatura_id, cuatrimestre, programa_id } = data;
    const [result] = await db.query(`
      INSERT INTO docente (nombre, asignatura_id, cuatrimestre, programa_id)
      VALUES (?, ?, ?, ?)
    `, [nombre, asignatura_id, cuatrimestre, programa_id]);
    return { id: result.insertId, ...data };
  },

  update: async (id, data) => {
    const { nombre, asignatura_id, cuatrimestre, programa_id } = data;
    await db.query(`
      UPDATE docente
      SET nombre = ?, asignatura_id = ?, cuatrimestre = ?, programa_id = ?
      WHERE id = ?
    `, [nombre, asignatura_id, cuatrimestre, programa_id, id]);
    return { id, ...data };
  },

  delete: async (id) => {
    const [result] = await db.query(`
      DELETE FROM docente WHERE id = ?
    `, [id]);
    return result.affectedRows > 0;
  }
};
