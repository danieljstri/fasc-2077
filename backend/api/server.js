const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const { resetarBancoDeDados } = require('../script/resetarBanco');

const { showRoutes } = require('./routes/showRouter');
const { palcoRoutes } = require('./routes/palcoRouter');
const { artistaRoutes } = require('./routes/artistaRouter');

// resetarBancoDeDados(); // Resetar o banco de dados ao iniciar o servidor

const app = express();
const port = 3000;

app.use(cors({
	origin: '*'
}));

// Rota de documentação da API
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

artistaRoutes(app);
palcoRoutes(app);
showRoutes(app);

app.get('/', (req, res) => {
	res.send('Sejam bem vindos ao FASC 2077!');
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
