var express = require('express');
var router = express.Router();
const BiciController = require('../controllers/bicis');

/* GET users listing. */
router.get('/', BiciController.Listar);
router.get('/novedades', BiciController.Novedades);
router.post('/agregar', BiciController.Nueva);
router.put('/actualizar/:id', BiciController.Actualizar);

module.exports = router;
