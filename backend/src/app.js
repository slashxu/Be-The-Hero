const express = require('express');  // importa as funcionalidades do express(pacotes)

const cors = require('cors'); // Modulo de seguração

const routes = require('./routes');  // importa arquivo de rotas

const { errors } = require('celebrate');  // tratamento de errros

const app = express();  // criando a aplicação

app.use(cors());

app.use(express.json()); // converte json em objeto do javascript

app.use(routes);

app.use(errors());

module.exports = app;

/** 
 * Rotas e Rrecursos
 * /

/**
  * Métodos HTTP
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de Parametros
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação...)
 * Route Params: Parametros utilizados para indentificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
  * app.get('/users', (request, response)=>{
  *
  * const params = request.query;
  * console.log(params);
  *
  * return response.json({
  *  evento: 'Semana OmniStack 11.0',
  *  aluno: 'Sergio'
  * });
  *
   *});
*/