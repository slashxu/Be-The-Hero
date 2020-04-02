const express = require('express');

const OngControler = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Sessão do login
routes.post('/sessions', SessionController.create);

// Lista as ongs do banco
routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

routes.get('/profile', ProfileController.index);

// Lista incidents do banco
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

// Deletar um incident
routes.delete('/incidents/:id', IncidentController.delete);

// Exrpotar o modulo rotas
module.exports = routes;