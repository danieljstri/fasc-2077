const Datastore = require("nedb-promises");

async function obterShowsDaApiExterna() {
  const url = "https://fasc2025.onrender.com/SHOWS";

  const resultado = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const shows = await resultado.json();
  return shows;
}

async function inserirShowsDaApiExternaNoBanco() {
  const dbShows = Datastore.create("./database/shows.db");

  try {
    const shows = await obterShowsDaApiExterna();
    dbShows.insert(shows);
  } 
  
  catch (erro) {
    console.log("Erro ao inserir shows no banco:", erro);
  }
}

module.exports = { obterShowsDaApiExterna, inserirShowsDaApiExternaNoBanco };
