const PedidosModel = require('../models/pedidos');

const PedidosController = {
    async Agregar(req,res){
        try {
            req.body.pedido = 'pendiente';
            const nuevo = await PedidosModel.create(req.body);
            res.send(nuevo)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al añadir nuevo pedido')
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
            const res = await PedidosModel.find({
                _id: req.user._id    
            })
            res.send(res)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al revisar tus pedidos')
        }
    }
}
module.exports = PedidosController;