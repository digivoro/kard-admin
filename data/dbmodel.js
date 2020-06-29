let model = {
  // OK
  carta: [
    {
      idCarta: Number,
      nombre: String,
      costo: Number,
      texto: String,
      ataque: Number,
      urlImg: String,
      idTipo: Number,
      idEdicion: Number,
      idFrecuencia: Number,
      idRaza: Number,
      idSubraza: Number,
      idIlustrador: Number,
      idConstruccion: Number
    }
  ],

  // OK
  raza: [
    {
      id: Number,
      nombre: String
    }
  ],

  // OK
  subraza: [
    {
      id: Number,
      nombre: String
    }
  ],

  // OK
  construccion: [
    {
      id: Number,
      nombre: String,
      cantidadMax: Number
    }
  ],

  // OK
  edicion: [
    {
      id: Number,
      nombre: String
    }
  ],

  // OK
  tipo: [
    {
      id: Number,
      nombre: String
    }
  ],

  // OK
  frecuencia: [
    {
      id: Number,
      nombre: String
    }
  ],

  // OK
  zonaMazo: [
    {
      id: Number,
      nombre: String
    }
  ],

  // OK
  formato: [
    {
      id: Number,
      nombre: String
    }
  ],

  // OK
  formato_edicion: [
    {
      idFormato: Number,
      idEdicion: Number
    }
  ],

  // OK
  tipo_zonaMazo: [
    {
      idTipo: Number,
      idZonaMazo: Number
    }
  ],

  // OK
  formato_frecuencia: [
    {
      idFrecuencia: Number,
      idFormato: Number
    }
  ],

  // DESPUES
  ilustrador: [
    {
      id: Number,
      nombre: String
    }
  ],

  // LUCHO. Contiene 2 ejemplos
  restriccionesFormato: [
    {
      idFormato: Number,
      idCarta: Number,
      cantidadMax: Number
    }
  ],

  // Poblar en produccion
  detalleMazo: [
    {
      idCarta: Number,
      idMazo: Number,
      idZonaMazo: Number,
      cantidad: Number
    }
  ],
  // Poblar en produccion
  mazo: [
    {
      id: Number,
      nombre: String,
      texto: String,
      esPublico: Boolean,
      idJugador: Number,
      idFormato: Number
    }
  ],

  // Poblar en produccion. Contiene 1 ejemplo
  jugador: [
    {
      id: Number,
      nombre: String,
      texto: String,
      email: String
    }
  ],

  // Poblar en produccion
  jugador_mazo: [
    {
      idJugador: Number,
      idMazo: Number,
      esPropio: Boolean
    }
  ]
};
