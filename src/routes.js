const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;