// Imports
const firestoreService = require("firestore-export-import");
const firebaseConfig = require("./config.js");
const serviceAccount = require("./kard-37937-firebase-adminsdk-i93lg-eb9528d74b.json");

// Descomentar archivos a importar:
let files = [
  // "../data/std-model/cartas.json"
  // "../data/std-model/construcciones.json",
  // "../data/std-model/ediciones.json",
  // "../data/std-model/formatos.json",
  // "../data/std-model/formatos_ediciones.json",
  // "../data/std-model/formatos_frecuencias.json",
  // "../data/std-model/frecuencias.json",
  "../data/std-model/jugadores.json"
  // "../data/std-model/razas.json",
  // "../data/std-model/restriccionesFormato.json",
  // "../data/std-model/subrazas.json",
  // "../data/std-model/tipos.json",
  // "../data/std-model/tipos_zonasMazo.json",
  // "../data/std-model/zonasMazo.json"
];

// JSON To Firestore
const jsonToFirestore = async file => {
  try {
    console.log("Initialzing Firebase");
    await firestoreService.initializeApp(
      serviceAccount,
      firebaseConfig.databaseURL
    );
    console.log("Firebase Initialized");

    await firestoreService.restore(file);
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

// Importar 1 archivo:
// jsonToFirestore(cards);

// Importar todos los archivos:
files.forEach(file => jsonToFirestore(file));
