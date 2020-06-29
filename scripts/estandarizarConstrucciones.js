const fs = require("fs");

let construcciones = [
  {
    nombre: "mercenario",
    cantidadMax: 49
  },
  {
    nombre: "unica",
    cantidadMax: 1
  },
  {
    nombre: "normal",
    cantidadMax: 3
  },
  {
    nombre: "oro_basico",
    cantidadMax: 49
  }
];

construccionesStd = construcciones.map((construccion, index) => {
  let construccionStd = {
    id: index,
    nombre: construccion.nombre,
    cantidadMax: construccion.cantidadMax
  };
  return construccionStd;
});

fs.writeFileSync(
  "../data/std-model/construcciones.json",
  JSON.stringify({ construcciones: construccionesStd })
);
