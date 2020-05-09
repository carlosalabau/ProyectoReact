const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/usuarios');
const clave = require('../config/clave')

const autenticacion = async(req, res, next) => {
        try {
            const token = req.headers.authorization;
            const payload = jwt.verify(token, clave.llave);
            const user = await UsuarioModel.findOne({
                _id: payload._id,
                tokens: token
            });
            if (!user) {
                return res.status(401).send({
                    message: 'You are not authorized'
                });
            }
            req.user = user;
            next();
        } catch (error) {
            console.error(error)
            res.status(401).send({
                message: 'No estas autorizado',
                error
            })
        }
    }
    //esta función devuelve un middleware en base a los roles que permite la array roles
    
const isPermiso = async(req,res,next) =>{
    const admins = ['admin','vendedor'];
    if (!admins.includes(req.user.rol)) {
        return res.status(403).send({
            message: 'No tienes acceso a esta zona',
            
        })
    }
    next();
}

module.exports = {
    autenticacion,
    isPermiso
}