// Conexao com banco
const connection = require('../database/connection');

module.exports ={
  async index(request, response) {

    // Paginação
    const { page = 1} = request.query;

    // Conta numeros de registros
    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)  // Limita a 5 registros por pagina
      .offset((page - 1) * 5) // Puka os 5 primeiros registros e vai para os proximos 5
      .select([
        'incidents.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf'
      ]);

    response.header('X-Total-Count', count['count(*)']);
  
    return response.json(incidents);
  },

  async create(request, response){
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({id});
  },

  async delete(request, response){
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if(incident.ong_id != ong_id){
      return response.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  }
};