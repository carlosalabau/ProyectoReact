var express = require('express');
var router = express.Router();
const BiciController = require('../controllers/bicis');

/* GET users listing. */
router.get('/detalles/:_id', BiciController.Detalles);
router.get('/novedades', BiciController.Novedades);
router.get('/categoria/:categoria', BiciController.PorCategoria);
router.post('/agregar', BiciController.Nueva);
router.put('/actualizar/:_id', BiciController.Actualizar);
router.get('/', BiciController.Listar);

module.exports = router;
