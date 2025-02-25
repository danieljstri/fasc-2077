const express = require('express');

const { obterTodosOsShows, cadastrarNovoShow } = require('../controllers/showController');

const showRoutes = (app) => {
	app.use(express.json());

	// Endpoint para obter todos os shows
	app.get("/shows", obterTodosOsShows);

	// Endpoint para cadastrar um novo show
	app.post("/shows", cadastrarNovoShow);
}

module.exports = { showRoutes };
