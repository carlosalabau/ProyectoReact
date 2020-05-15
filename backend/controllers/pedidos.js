const PedidosModel = require('../models/pedidos');
const {actualizarStock} = require('../services/pedidoService');

const PedidosController = {
    async Agregar(req,res){
        try {
            req.body.estado = 'pendiente';
            req.body.userId = req.user._id;
            const nuevo = await PedidosModel.create({
                ...req.body
            });
            res.send(nuevo)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al añadir nuevo pedido')
            console.log(error)
        }
    },
    async Listar(req,res){
        try {
            const pedidos = await PedidosModel.find();
            res.send(pedidos);
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al listar los pedidos')
        }
    },
    async ListarById(req,res){
        try {
            const request = await PedidosModel.find({
                userId: req.user._id    
            })
            res.send(request)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al revisar tus pedidos')
            console.log(error)
        }
    }
}
module.exports = PedidosController;