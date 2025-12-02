const { cuatrimestre } = require("./alumno.model");
const { programaId } = require("./asignaturas.model");

const Docente = {
  id: Number,
  nombre_asignaturas: String,
  cuatrimestre: Number,
  programaId: Number
};

module.exports = Docente;
