const express = require('express');

const routes = express.Router();

routes.post('/ongs', (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;
  const { body } = req

  console.table(body);
  return res.json({ ok: true });
});

module.exports = routes;