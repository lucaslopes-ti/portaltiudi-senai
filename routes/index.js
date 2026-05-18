var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const resultado = await db.query('SELECT * FROM portaludi ORDER BY data_abertura DESC')
    res.render('index', { title: 'Portal de Chamados - SENAI', chamados: resultado.rows });
  } catch (err){
    console.error('Erro ao buscar chamados:', err.message);
    res.status(500).send('Erro ao buscar chamados: ' + err.message);
  }
});

// Agora criar o metodo POST
router.post('/abrir', async function(req, res, next) {
  try {
    const { solicitante, setor, descricao } = req.body;
    await db.query(
      'INSERT INTO portaludi (solicitante, setor, descricao, data_abertura) VALUES ($1, $2, $3, NOW())',
      [solicitante, setor, descricao]
    );
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao abrir chamado');
  }
});


module.exports = router;
