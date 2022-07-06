const model = require("./model");

function addTrailer(actores, titulo, año, director, reseña, src, portada) {
  return new Promise((resolve, reject) => {
    if (!titulo || !año || !director || !reseña) {
      console.error("Faltan datos");
      reject("Datos incorrectos");
      return false;
    }

    let fullTrailer = {
      actores,
      titulo,
      año,
      director,
      reseña,
      src,
      portada
    };

    model.add(fullTrailer);
    resolve(fullTrailer);
  });
}
function getTrailer(id = null) {
  return new Promise((resolve, reject) => {
    const trailers = model.get(id);
    if (!trailers) {
      reject("No hay mensajes disponibles");
      return false;
    }
    resolve(trailers);
  });
}
function getOwnTrailer(id) {
  return new Promise((resolve, reject) => {
    const trailers = model.getOne(id);
    if (!trailers) {
      reject("No hay mensajes disponibles");
      return false;
    }
    resolve(trailers);
  });
}
async function updateTrailer(id, trailer) {
  return new Promise(async (resolve, reject) => {
    if (!id || !trailer) {
      reject("Datos incorrectos");
      return false;
    }
    const response = await model.update(id, trailer);
    resolve(response);
  });
}

async function deleteTrailer(id) {
  return new Promise(async (resolve, reject) => {
    const response = await model.delete(id);
    if (!response) {
      reject("Datos incorrectos");
    }
    resolve(response);
  });
}

module.exports = {
  addTrailer,
  getTrailer,
  getOwnTrailer,
  updateTrailer,
  deleteTrailer,
};
