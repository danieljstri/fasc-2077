const { deletarBancoDeDados } = require("../api/services/deleteService");
const { inserirShowsDaApiExternaNoBanco } = require("../api/services/showService");
const { inserirPalcosDaApiExternaNoBanco } = require("../api/services/palcoService");
const { inserirArtistasDaApiExternaNoBanco } = require("../api/services/artistaService");

function resetarBancoDeDados() {
  deletarBancoDeDados();

  inserirPalcosDaApiExternaNoBanco();
  inserirShowsDaApiExternaNoBanco();
  inserirArtistasDaApiExternaNoBanco();
}

resetarBancoDeDados();

module.exports = { resetarBancoDeDados };
