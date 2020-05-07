const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'El email no es correcto']
    },
    password: {
        type: String,
        required: [true, 'El password no es correcto']
    },
    nombre: {
        type: String,
        required: [true, 'El campo nombre no es correcto']
    },
    apellidos: {
        type: String,
        required: [true, 'El campo apellidos no es correcto']
    }
})