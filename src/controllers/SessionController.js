const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first(); // Retorna um obj e não um array

    if (!ong) {
      return res.status(400).json({ error: 'Nenhuma ong encontrada com esse ID' });
    }

    return res.json(ong);
  }
}