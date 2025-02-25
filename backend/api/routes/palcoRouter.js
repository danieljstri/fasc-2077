const express = require('express');

const { obterTodosOsPalcos } = require('../controllers/palcoController');

const palcoRoutes = (app) => {
	app.use(express.json());

	// Endpoint para obter todos os Palcos
	app.get("/palcos", obterTodosOsPalcos);
}

module.exports = { palcoRoutes };
