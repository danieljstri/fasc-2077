const Datastore = require("nedb-promises");

const db = {};
db.artistas = Datastore.create({
  filename: "./database/artistas.db",
});

async function obterTodosOsArtistasDB() {
  try {
    const artistas = await db.artistas.find({}).sort({ name: 1 });
    return artistas;
  } 
  catch (erro) {
    console.log("Erro ao consultar artistas no banco:", erro);
  }
}

async function obterArtistaPorNomeDB(nome) {
  try {
    const artista = await db.artistas.findOne({name: nome});
    return artista;
  } 
  catch (erro) {
    console.log("Erro ao consultar artista no banco:", erro);
  }
}

async function cadastrarNovoArtistaDB(artista) {
	try {
		db.artistas.insertOne(artista);
	}
	catch (erro) {
		console.log("Erro ao cadastrar novo artista no banco:", erro);
	}
}

module.exports = { obterTodosOsArtistasDB, obterArtistaPorNomeDB, cadastrarNovoArtistaDB };
