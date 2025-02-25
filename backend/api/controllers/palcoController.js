const { obterTodosOsPalcosDB } = require('../models/palcoModel.js');

async function obterTodosOsPalcos(req, res) {

	const palcos = await obterTodosOsPalcosDB();
	res.status(200).json(palcos);
}

module.exports = { obterTodosOsPalcos };
