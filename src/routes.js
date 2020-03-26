const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;
  const { body } = req

  const id = crypto.randomBytes(4).toString('HEX');

  console.table(body);
  console.log(id)
  return res.json({ ok: true });
});

module.exports = routes;