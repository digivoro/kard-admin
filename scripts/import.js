// Imports
const firestoreService = require("firestore-export-import");
const firebaseConfig = require("./config.js");
const serviceAccount = require("./kard-37937-firebase-adminsdk-i93lg-eb9528d74b.json");

// Files
let files = [
  "../data/mylsets.json",
  "../data/mylcards.json",
  "../data/mylformatos.json",
  "../data/mylpalabrasclave.json",
  "../data/myltorneo.json"
];
let sets = "../data/mylsets.json";
let cards = "../data/mylcards.json";
let formatos = "../data/mylformatos.json";
let palabrasclave = "../data/mylpalabrasclave.json";
let torneos = "../data/myltorneos.json";

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
jsonToFirestore(cards);

// Importar todos los archivos:
// files.forEach(file => jsonToFirestore(file));
