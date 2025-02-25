const fs = require('fs');

const caminhoDaPasta = './database';

function deletarBancoDeDados() {

	try {
    fs.rmSync(caminhoDaPasta, { recursive: true, force: true });
	} 

	catch (erro) {
    console.error('Erro ao apagar o banco de dados:', erro);
	}
}

module.exports = { deletarBancoDeDados };
