const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());

app.use('/programas', require('./routes/programas.routes'));
app.use('/asignaturas', require('./routes/asignaturas.routes'));
app.use('/docentes', require('./routes/docentes.routes'));
app.use('/grupos', require('./routes/grupos.routes'));
app.use('/alumnos', require('./routes/alumnos.routes'));

app.get('/', (req, res) => {
  res.json({ mensaje: "API Académica funcionando correctamente" });
});

app.use((err, req, res, next) => {
  console.error("Error global:", err.message);
  res.status(500).json({ error: "Error interno del servidor", detalle: err.message });
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
