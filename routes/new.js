var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { novo: 'Nova Rota', nome: 'Emerson Ferreira' });
});

module.exports = router;
