const Datastore = require('nedb-promises');

async function obterPalcosDaApiExterna() {

	const url = "https://fasc2025.onrender.com/PALCOS";

	const resultado = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});

	const palcos = await resultado.json();
	return palcos;
}

async function inserirPalcosDaApiExternaNoBanco() {
	const dbPalcos = Datastore.create('./database/palcos.db');
	
		try {
			const palcos = await obterPalcosDaApiExterna();
			dbPalcos.insert(palcos);
		}
	
		catch (erro) {
			console.log("Erro ao inserir shows no banco:", erro);
		}
}

module.exports = { inserirPalcosDaApiExternaNoBanco };
