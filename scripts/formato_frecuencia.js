const fs = require("fs");
const dataFrecuencias = require("../data/std-model/frecuencias.json");
const dataFormatos = require("../data/std-model/formatos.json");

// PB todo
let pb = [
  "Promo",
  "Legendaria",
  "Ultra Real",
  "Mega Real",
  "Real",
  "Cortesano",
  "Vasallo",
  "Oro",
  "Milenaria"
];

// Imperio todo
let imperio = [
  "Promo",
  "Legendaria",
  "Ultra Real",
  "Mega Real",
  "Real",
  "Cortesano",
  "Vasallo",
  "Oro",
  "Milenaria"
];

// vcr VCR
let vcr = ["Real", "Cortesano", "Vasallo", "Oro"];

// Infanteria VC
let infanteria = ["Cortesano", "Vasallo", "Oro"];

// unificado todo
let unificado = [
  "Promo",
  "Legendaria",
  "Ultra Real",
  "Mega Real",
  "Real",
  "Cortesano",
  "Vasallo",
  "Oro",
  "Milenaria"
];

let formatos = [
  { nombre: "pb", frecuencias: pb },
  { nombre: "imperio", frecuencias: imperio },
  { nombre: "vcr", frecuencias: vcr },
  { nombre: "infanteria", frecuencias: infanteria },
  { nombre: "unificado", frecuencias: unificado }
];

function getIdFrecuencia(frecuenciaBuscada) {
  let frecuenciaEncontrada = dataFrecuencias.frecuencias.find(
    frecuencia => frecuencia.nombre === frecuenciaBuscada
  );
  return frecuenciaEncontrada ? frecuenciaEncontrada.id : null;
}

function getIdFormato(formatoBuscado) {
  let formato = dataFormatos.formatos.find(
    formatoCarta => formatoCarta.nombre === formatoBuscado
  );
  return formato ? formato.id : null;
}

let formatos_frecuencias = [];

formatos.forEach(formato => {
  formato.frecuencias.forEach(frecuencia => {
    let formato_frecuencia = {
      idFormato: getIdFormato(formato.nombre),
      idfrecuencia: getIdFrecuencia(frecuencia)
    };
    formatos_frecuencias.push(formato_frecuencia);
  });
});

fs.writeFileSync(
  "../data/std-model/formatos_frecuencias.json",
  JSON.stringify({ formatos_frecuencias: formatos_frecuencias })
);
