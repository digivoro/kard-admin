// SCRIPT NO HABILITADO
const fs = require("fs");
const dataEdiciones = require("../data/mylsets.json");

let ediciones = [
  {
    id: 27,
    ordenBloque: 27,
    nombre: "dinastia_del_dragon",
    nombrePublico: "Dinastía del Dragón"
  },
  {
    id: 26,
    ordenBloque: 26,
    nombre: "invasion_oscura",
    nombrePublico: "Invasión Oscura"
  },
  {
    id: 25,
    ordenBloque: 25,
    nombre: "terrores_nocturnos",
    nombrePublico: "Terrores Nocturnos"
  },
  {
    id: 24,
    ordenBloque: 24,
    nombre: "tinta_inmortal",
    nombrePublico: "Tinta Inmortal"
  },
  { id: 23, ordenBloque: 23, nombre: "arsenal", nombrePublico: "Arsenal" },
  {
    id: 22,
    ordenBloque: 22,
    nombre: "kilimanjaro",
    nombrePublico: "Kilimanjaro"
  },
  { id: 21, ordenBloque: 21, nombre: "calavera", nombrePublico: "Calavera" },
  { id: 20, ordenBloque: 20, nombre: "olimpia", nombrePublico: "Olimpia" },
  { id: 19, ordenBloque: 19, nombre: "dharma", nombrePublico: "Dharma" },
  { id: 18, ordenBloque: 18, nombre: "kemet", nombrePublico: "Kemet" },
  {
    id: 17,
    ordenBloque: 17,
    nombre: "legado_gotico",
    nombrePublico: "Legado Gótico"
  },
  {
    id: 16,
    ordenBloque: 16,
    nombre: "hijos_del_sol",
    nombrePublico: "Hijos Del Sol"
  },
  {
    id: 15,
    ordenBloque: 15,
    nombre: "axis_mundi",
    nombrePublico: "Axis Mundi"
  },
  { id: 14, ordenBloque: 14, nombre: "steampunk", nombrePublico: "Steampunk" },
  {
    id: 13,
    ordenBloque: 13,
    nombre: "aguila_imperial",
    nombrePublico: "Águila Imperial"
  },
  {
    id: 12,
    ordenBloque: 12,
    nombre: "contraataque",
    nombrePublico: "Contra Ataque"
  },
  { id: 11, ordenBloque: 11, nombre: "dominio", nombrePublico: "Dominio" },
  {
    id: 10,
    ordenBloque: 10,
    nombre: "solnaciente",
    nombrePublico: "Sol Naciente"
  },
  { id: 9, ordenBloque: 9, nombre: "bushido", nombrePublico: "Bushido" },
  { id: 8, ordenBloque: 8, nombre: "templarios", nombrePublico: "Templarios" },
  { id: 7, ordenBloque: 7, nombre: "camelot", nombrePublico: "Camelot" },
  { id: 6, ordenBloque: 6, nombre: "midgard", nombrePublico: "Midgard" },
  { id: 5, ordenBloque: 5, nombre: "asgard", nombrePublico: "Asgard" },
  { id: 4, ordenBloque: 4, nombre: "rebelión", nombrePublico: "Rebelión" },
  { id: 3, ordenBloque: 3, nombre: "sumeria", nombrePublico: "Sumeria" },
  {
    id: 2,
    ordenBloque: 2,
    nombre: "furia_extension",
    nombrePublico: "Furia Extension"
  },
  { id: 1, ordenBloque: 1, nombre: "furia", nombrePublico: "Furia" }
];

dataEdicionesStd = dataEdiciones.sets.map((set, index) => {
  let edicionStd = {
    id: index,
    nombre: set.nombre
  };
  return edicionStd;
});

console.log(dataEdicionesStd);
