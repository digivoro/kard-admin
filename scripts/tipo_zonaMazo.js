const fs = require("fs");
const dataTipos = require("../data/std-model/tipos.json");
const dataZonasMazo = require("../data/std-model/zonasMazo.json");

// Todo menos monumento
let main = [
  "aliado",
  "talisman",
  "arma",
  "totem",
  "oro_basico",
  "oro_habilidad"
];

// Todo
let sideboard = [
  "aliado",
  "talisman",
  "arma",
  "totem",
  "monumento",
  "oro_basico",
  "oro_habilidad"
];
let monumento = ["monumento"];
let oro_inicial = ["oro_basico"];

let zonasMazo = [
  { nombre: "main", tipos: main },
  { nombre: "sideboard", tipos: sideboard },
  { nombre: "monumento", tipos: monumento },
  { nombre: "oro_inicial", tipos: oro_inicial }
];

function getIdZonaMazo(zonaMazoBuscada) {
  let zonaMazoEncontrada = dataZonasMazo.zonasMazo.find(
    zonaMazo => zonaMazo.nombre === zonaMazoBuscada
  );
  return zonaMazoEncontrada ? zonaMazoEncontrada.id : null;
}

function getIdTipo(tipoBuscado) {
  let tipoEncontrado = dataTipos.tipos.find(
    tipoCarta => tipoCarta.nombre === tipoBuscado
  );
  return tipoEncontrado ? tipoEncontrado.id : null;
}

let tipos_zonasMazo = [];

zonasMazo.forEach(zonaMazo => {
  zonaMazo.tipos.forEach(tipo => {
    let tipo_zonaMazo = {
      idZonaMazo: getIdZonaMazo(zonaMazo.nombre),
      idTipo: getIdTipo(tipo)
    };
    tipos_zonasMazo.push(tipo_zonaMazo);
  });
});

fs.writeFileSync(
  "../data/std-model/tipos_zonasMazo.json",
  JSON.stringify({ tipos_zonasMazo: tipos_zonasMazo })
);
