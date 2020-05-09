const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'El email no es correcto'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password no es correcto']
    },
    nombre: {
        type: String,
        required: [true, 'El campo nombre no es correcto']
    },
    rol: {
        type: String
    },
    tokens: [String]
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            delete ret.tokens;
            delete ret.password;
            return ret
        }
    }
})
const UsuarioModel = mongoose.model('Usuario', usuarioSchema);

module.exports = UsuarioModel;