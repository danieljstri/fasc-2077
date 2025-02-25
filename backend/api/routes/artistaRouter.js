const express = require("express");

const { obterTodosOsArtistas, obterArtistaPorNome, cadastrarNovoArtista } = require("../controllers/artistaController");

const artistaRoutes = (app) => {
  app.use(express.json());

  // Endpoint para obter todos os artistas
  app.get("/artistas", obterTodosOsArtistas);

  // Endpoint para obter artista por nome
  app.get("/artistas/:nome", obterArtistaPorNome);

	// Endpoint para cadastrar um novo artista
  app.post("/artistas", cadastrarNovoArtista);
};

module.exports = { artistaRoutes };
