const { obterTodosOsArtistasDB, obterArtistaPorNomeDB, cadastrarNovoArtistaDB } = require("../models/artistaModel.js");

async function obterTodosOsArtistas(req, res) {
  const artistas = await obterTodosOsArtistasDB();
  res.status(200).json(artistas);
}

async function obterArtistaPorNome(req, res) {
	const nome = req.params.nome;

  const artista = await obterArtistaPorNomeDB(nome);
  res.status(200).json(artista);
}

async function cadastrarNovoArtista(req, res) {
	const artista = req.body;

	const retornoDaRequisicao = await cadastrarNovoArtistaDB(artista);
	res.status(200).json({
		message: retornoDaRequisicao,
		artistaCreated: artista
	});
}

module.exports = { obterTodosOsArtistas, obterArtistaPorNome, cadastrarNovoArtista };
