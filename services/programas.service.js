const db = require('../config/db');

async function obtener() {
  const [rows] = await db.query('SELECT * FROM programa_de_estudio');
  return rows;
}

async function crear(data) {
  const sql = 'INSERT INTO programas (nombre, cuatrimestres) VALUES (?, ?)';
  const [result] = await db.query(sql, [data.nombre, data.cuatrimestres]);
  return { id: result.insertId, ...data };
}

module.exports = { obtener, crear };
