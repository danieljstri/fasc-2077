const Datastore = require('nedb-promises');

const db = {};
db.shows = Datastore.create({
	filename: "./database/shows.db",
});

async function obterTodosOsShowsDB() {
	try {
		const shows = await db.shows.find({}).sort({ name: 1 });
		return shows;
	}
	catch (erro) {
		console.log("Erro ao consultar shows no banco:", erro);
	}
}

async function cadastrarNovoShowDB(show) {
	try {
		db.shows.insertOne(show);
	}
	catch (erro) {
		console.log("Erro ao cadastrar novo show no banco:", erro);
	}
}

module.exports = { obterTodosOsShowsDB, cadastrarNovoShowDB };
