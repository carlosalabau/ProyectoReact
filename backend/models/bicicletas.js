const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const biciSchema = new mongoose.Schema({
    marca:{
        type: String,
        required: [true, 'El campo marca es requerido']
    },
    precio: {
        type: Number,
        required: [true, 'El campo precio es requerido']
    },
    cantidad: Number,
    vendidas: Number,
    miniImagen: [String],
    descripcion: String,
    imagen: String,
    categoria: String,
    esNovedad: Boolean,
    pedidosId: {
        type: [ObjectId],
        ref: 'Pedidos'
    },
    usuarioId: {
        type: ObjectId,
        ref: 'Usuarios'
    }
},{ timestamps: true })

const BiciModel = mongoose.model('Bici', biciSchema);

module.exports = BiciModel;