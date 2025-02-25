const Datastore = require('nedb-promises');
const { obterShowsDaApiExterna } = require('./showService');

async function obterArtistasDaApiExterna() {
	const shows = await obterShowsDaApiExterna();

	let artistas = [];
	let contador = 0;

	shows.forEach((show) => {
		const artista = {
			id: contador++,
			name: show.name,
			description: show.description,
			type: show.type,
			imgUrl: show.imgUrl,
			videoUrl: `./backend/videos/${show.name}.mp4`,
		};

		artistas.push(artista);
	});

	return artistas;
}

async function inserirArtistasDaApiExternaNoBanco() {
	const dbArtistas = Datastore.create('./database/artistas.db');

	try {
		const artistas = await obterArtistasDaApiExterna();
		dbArtistas.insert(artistas);
	} catch (erro) {
		console.log('Erro ao inserir artistas no banco:', erro);
	}
}

module.exports = { inserirArtistasDaApiExternaNoBanco };
