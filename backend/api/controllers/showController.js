const { obterTodosOsShowsDB, cadastrarNovoShowDB } = require('../models/showlModel.js');

async function obterTodosOsShows(req, res) {

	const shows = await obterTodosOsShowsDB();
	res.status(200).json(shows);
}

async function cadastrarNovoShow(req, res) {

	const show = req.body;

	const retornoDaRequisicao = await cadastrarNovoShowDB(show);
	res.status(200).json({
		message: retornoDaRequisicao,
		showCreated: show
	});
}

module.exports = { obterTodosOsShows, cadastrarNovoShow };
