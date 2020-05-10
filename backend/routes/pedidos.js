var express = require('express');
var router = express.Router();
const PedidosController = require('../controllers/pedidos');
const {autenticacion, isPermiso} = require('../middleware/autenticacion')

/* GET users listing. */
router.post('/agregar', autenticacion, PedidosController.Agregar);
router.get('/', autenticacion, isPermiso, PedidosController.Listar);
router.get('/pedido', autenticacion, PedidosController.ListarById);

module.exports = router;
