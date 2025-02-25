const Datastore = require('nedb-promises');

const db = {};
db.palcos = Datastore.create({
	filename: "./database/palcos.db",
});

async function obterTodosOsPalcosDB() {
	try {
		const palcos = await db.palcos.find({}).sort({ name: 1 });
		return palcos;
	}
	catch (erro) {
		console.log("Erro ao consultar palcos no banco:", erro);
	}
}

module.exports = { obterTodosOsPalcosDB };
