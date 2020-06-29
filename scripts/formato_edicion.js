const fs = require("fs");
const dataEdiciones = require("../data/std-model/ediciones.json");
const dataFormatos = require("../data/std-model/formatos.json");

let pb = [
  "aniversario",
  "antologia",
  "barbarie",
  "bestiario",
  "co_compendium",
  "cruzadas",
  "dominios_de_ra",
  "eco_compendium",
  "el_reto",
  "encrucijada",
  "espada_sagrada",
  "espiritu_de_dragon",
  "general_pb",
  "guardianes",
  "guerrero_jaguar",
  "helenica",
  "heroes",
  "hijos_de_daana",
  "hordas",
  "icarito_pe",
  "imperio",
  "juego_organizado",
  "la_cofradia",
  "la_ira_del_nahual",
  "liber_dominus",
  "mundo_gotico",
  "mundo_gotico_x",
  "myl_lackey",
  "promo",
  "q_vil",
  "ragnarok",
  "reino_de_acero",
  "tierras_altas",
  "vendaval"
];
let imperio = [
  "dinastia_del_dragon",
  "invasion_oscura",
  "terrores_nocturnos",
  "tinta_inmortal",
  "arsenal",
  "kilimanjaro",
  "calavera",
  "olimpia",
  "dharma",
  "kemet",
  "legado_gotico"
];
let vcr = [
  "dinastia_del_dragon",
  "invasion_oscura",
  "terrores_nocturnos",
  "tinta_inmortal",
  "arsenal",
  "kilimanjaro",
  "calavera",
  "olimpia",
  "dharma",
  "kemet",
  "legado_gotico"
];
// Nueva Era
let infanteria = [
  "dinastia_del_dragon",
  "invasion_oscura",
  "terrores_nocturnos",
  "tinta_inmortal",
  "arsenal",
  "kilimanjaro",
  "calavera",
  "olimpia",
  "dharma",
  "kemet",
  "legado_gotico",
  "hijos_del_sol",
  "axis_mundi",
  "steampunk",
  "aguila_imperial",
  "contraataque",
  "dominio",
  "solnaciente",
  "bushido",
  "templarios",
  "camelot",
  "midgard",
  "asgard",
  "rebelión",
  "sumeria",
  "furia_extension",
  "furia"
];
// Nueva Era
let unificado = [
  "dinastia_del_dragon",
  "invasion_oscura",
  "terrores_nocturnos",
  "tinta_inmortal",
  "arsenal",
  "kilimanjaro",
  "calavera",
  "olimpia",
  "dharma",
  "kemet",
  "legado_gotico",
  "hijos_del_sol",
  "axis_mundi",
  "steampunk",
  "aguila_imperial",
  "contraataque",
  "dominio",
  "solnaciente",
  "bushido",
  "templarios",
  "camelot",
  "midgard",
  "asgard",
  "rebelión",
  "sumeria",
  "furia_extension",
  "furia"
];

let formatos = [
  { nombre: "pb", ediciones: pb },
  { nombre: "imperio", ediciones: imperio },
  { nombre: "vcr", ediciones: vcr },
  { nombre: "infanteria", ediciones: infanteria },
  { nombre: "unificado", ediciones: unificado }
];

function getIdEdicion(edicionBuscada) {
  let edicion = dataEdiciones.ediciones.find(
    edicionCarta => edicionCarta.nombre === edicionBuscada
  );
  return edicion ? edicion.id : null;
}

function getIdFormato(formatoBuscado) {
  let formato = dataFormatos.formatos.find(
    formatoCarta => formatoCarta.nombre === formatoBuscado
  );
  return formato ? formato.id : null;
}

let formatos_ediciones = [];

formatos.forEach(formato => {
  formato.ediciones.forEach(edicion => {
    let formato_edicion = {
      idFormato: getIdFormato(formato.nombre),
      idEdicion: getIdEdicion(edicion)
    };
    formatos_ediciones.push(formato_edicion);
  });
});

fs.writeFileSync(
  "../data/std-model/formatos_ediciones.json",
  JSON.stringify({ formatos_ediciones: formatos_ediciones })
);
