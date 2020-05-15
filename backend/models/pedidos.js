const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const pedidosSchema = new mongoose.Schema({
    estado:{
        type: String,
        required: [true, 'El campo estado es obligatorio']
    },
    total:{
        type: Number,
    },
    userId: {
        type: ObjectId,
        ref: 'Usuario'
    },
    productosId: [{
        type: ObjectId,
        ref: 'Bici'
    }]
},{ timestamps: true })

const PedidosModel = mongoose.model('Pedidos', pedidosSchema);

module.exports = PedidosModel;