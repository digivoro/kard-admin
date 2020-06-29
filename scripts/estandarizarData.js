const fs = require("fs");
const dataCartas = require("../data/mylcards Yen Update.json");
const dataTipos = require("../data/std-model/tipos.json");
const dataRazas = require("../data/std-model/razas.json");
const dataSubrazas = require("../data/std-model/subrazas.json");
const dataEdiciones = require("../data/std-model/ediciones.json");

function getUrlImg(archivoImagen, edicion) {
  const BASE_URL =
    "https://firebasestorage.googleapis.com/v0/b/kard-37937.appspot.com/o/img%2Fsets%2F";
  const TOKEN_URL = ".jpg?alt=media&token=621313a8-dda3-415e-a51f-c2e8eee9fb73";
  return `${BASE_URL}${edicion}%2F${archivoImagen}${TOKEN_URL}`;
}

function getIdTipo(tipoBuscado) {
  let tipoEncontrado = dataTipos.tipos.find(
    tipoCarta => tipoCarta.nombre === tipoBuscado
  );
  return tipoEncontrado ? tipoEncontrado.id : null;
}

function getIdEdicion(edicionBuscada) {
  let edicionEncontrada = dataEdiciones.ediciones.find(
    edicionCarta => edicionCarta.nombre === edicionBuscada
  );
  return edicionEncontrada ? edicionEncontrada.id : null;
}

function getIdRaza(razaBuscada) {
  let razaEncontrada = dataRazas.razas.find(
    razaCarta => razaCarta.nombre === razaBuscada
  );
  return razaEncontrada ? razaEncontrada.id : null;
}

function getIdSubraza(habilidadCarta) {
  if (habilidadCarta) {
    habilidadCarta = habilidadCarta.toLowerCase();
    if (stringALista(habilidadCarta).slice(0, 3).includes("luz")) {
      return 0;
    } else if (stringALista(habilidadCarta).slice(0, 3).includes("oscuridad")) {
      return 1;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

// REVISAR!
function getIdConstruccion(tipoCarta, habilidadCarta) {
  if (tipoCarta) {
    tipoCarta = tipoCarta.toLowerCase();

    if (habilidadCarta) {
      habilidadCarta = habilidadCarta.toLowerCase();

      if (stringALista(habilidadCarta).slice(0, 3).includes("mercenario")) {
        return 0;
      } else if (stringALista(habilidadCarta).slice(0, 3).includes("unica")) {
        return 1;
      } else if (tipoCarta.includes("oro")) {
        if (habilidadCarta.includes("oro sin habilidad")) {
          return 3;
        } else {
          return 2;
        }
      } else {
        return 2;
      }
    } else {
      return 3;
    }
  } else {
    return null;
  }
}

// Helper de getIdConstruccion
function stringALista(string) {
  return string.replace(/\./g, " ").replace(/\,/g, " ").split(" ");
}

let dataCartasStd = dataCartas.cards.map((card, index) => {
  let urlImg = getUrlImg(card.imageFile, card.set);
  let idTipo = getIdTipo(card.type);
  let idEdicion = getIdEdicion(card.set);
  let idRaza = getIdRaza(card.affiliation);
  let idSubraza = getIdSubraza(card.skills);
  let idConstruccion = getIdConstruccion(card.type, card.skills);

  let cartaStd = {
    idCarta: index,
    nombre: card.name,
    costo: card.cost,
    texto: card.skills,
    ataque: card.offense,
    urlImg: urlImg,
    idTipo: idTipo,
    idEdicion: idEdicion,
    idFrecuencia: null,
    idRaza: idRaza,
    idSubraza: idSubraza,
    idIlustrador: null,
    idConstruccion: idConstruccion
  };
  return cartaStd;
});

let data = JSON.stringify({ cartas: dataCartasStd });

fs.writeFileSync("../data/std-model/cartas.json", data);
