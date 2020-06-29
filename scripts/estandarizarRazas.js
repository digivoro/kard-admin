const fs = require("fs");
const normalize = require("./normalize");

const razas = [
  "Ancestral",
  "Bestia",
  "Bárbaro",
  "Caballero",
  "Dragón",
  "Eterno",
  "Faerie",
  "Faraón",
  "Guerrero",
  "Héroe",
  "Olímpico",
  "Oni",
  "Sacerdote",
  "Samurái",
  "Sin Raza",
  "Sombra",
  "Titán"
];
const subrazas = ["Luz", "Sombra"];

let dataRazasStd = razas.map((raza, index) => {
  razaStd = {
    id: index,
    nombre: normalize(raza).replace(" ", "_").toLowerCase(),
    nombreDisplay: raza
  };
  return razaStd;
});

let dataSubrazasStd = subrazas.map((subraza, index) => {
  subrazaStd = {
    id: index,
    nombre: normalize(subraza).toLowerCase(),
    nombreDisplay: subraza
  };
  return subrazaStd;
});

fs.writeFileSync(
  "../data/std-model/razas.json",
  JSON.stringify({ razas: dataRazasStd })
);
fs.writeFileSync(
  "../data/std-model/subrazas.json",
  JSON.stringify({ subrazas: dataSubrazasStd })
);
