const db = require('../config/db');

async function obtener() {
  const [rows] = await db.query('SELECT * FROM programas');
  return rows;
}

async function crear(data) {
  const sql = 'INSERT INTO programas (nombre, cuatrimestres) VALUES (?, ?)';
  const [result] = await db.query(sql, [data.nombre, data.cuatrimestres]);
  return { id: result.insertId, ...data };
}

module.exports = { obtener, crear };
