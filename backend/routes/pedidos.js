var express = require('express');
var router = express.Router();
const PedidosController = require('../controllers/pedidos');

/* GET users listing. */
router.get('/agregar', PedidosController.Agregar);
router.get('/', PedidosController.Listar);
router.get('/pedido', PedidosController.ListarById);


module.exports = router;
