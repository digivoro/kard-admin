/**
 * Script que crea lista de sets de Mitos y Leyendas en base a estructura de carpetas
 */

const fs = require("fs");

const retroMyl = "./RetroMyL/sets/setimages";
const mitosNuevaEra = "./MitosNuevaEra/sets/setimages";
const mylCronicas = "./MyLCronicas/sets/setimages";

let folderList = [retroMyl, mitosNuevaEra, mylCronicas];
let listaEdiciones = [];
let idCode = 1;

const generarCodigo = num => {
  if (num < 10) {
    return `000${num}`;
  } else if (num < 100) {
    return `00${num}`;
  } else if (num < 1000) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
};

folderList.forEach(folder =>
  fs.readdirSync(folder).forEach(file => {
    let superset = folder.split("/")[1].toLowerCase();
    listaEdiciones.push({
      codigo: generarCodigo(idCode),
      nombre: file.toLowerCase(),
      superset: superset
        .replace("mitosnuevaera", "nueva_era")
        .replace("mylcronicas", "cronicas")
        .replace("retromyl", "retro")
    });
    idCode++;
  })
);

fs.writeFileSync("mylsets.json", JSON.stringify(listaEdiciones));
