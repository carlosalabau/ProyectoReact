const UsuarioModel = require('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const clave = require('../config/clave');
const transporter = require('../config/nodemailer');

const UsuarioController = {
    async ListarUsuarios(req,res){
        try {
            const users = await UsuarioModel.find();
            res.send(users);
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al listar los usuarios')
        }
    },
    async Registrar(req,res){
        try {
            req.body.rol = 'usuario';
            const hash = await bcrypt.hash(req.body.password, 10); 
            req.body.password = hash;           
            const nuevo = await UsuarioModel.create(req.body);
            res.send({nuevo, mensaje: 'Usuario creado correctamente'})
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al crear un usuario')
            console.log(error)
        }
    },
    async Login(req,res){
        try {
            const user = await UsuarioModel.findOne({email: req.body.email});
            if(!user) return res.status(401).send('Email o contraseña incorrectos')
            const isMatch = await bcrypt.compare(req.body.password, user.password)
            if(!isMatch) return res.status(401).send('Email o contraseña incorrectos')
            const token = jwt.sign({_id: user._id}, clave.llave, {expiresIn: '2h'});
            if (user.tokens.length > 4) user.tokens.shift(); //si ya hay 5 tokens eliminamos el más antiguo
            user.tokens.push(token); //añadimos el token al final del array
            await user.save(); //guarda los cambios en mongoDB
            res.send({mensaje: 'Bienvenido '+user.email, user, token})
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al logueare')
        }
    },
    async InfoUsuario(req, res) {
        res.send(req.user)
    },
    async Logout(req,res){
        try {
            const desc = await UsuarioModel.findByIdAndUpdate(req.user._id, {
                $pull: {
                    tokens: req.headers.authorization
                }
            })
            res.send({mensaje: 'Desconexion con exito', desc})
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al desconectarte')
        }
    },
    async Recover(req, res) {
        try {
            const recoverToken = jwt.sign({email:req.params.email},'recoverSecret',{expiresIn:'48h'})
            const url ="http://localhost:4200/recover/"+recoverToken
            await transporter.sendMail({
                to: req.params.email,
                subject:'Recupera tu cuenta',
                html:`
                <h3>Recupera tu cuenta</h3>
                <a href="${url}">Pincha aqui para cambiar la contraseña</a>
                Este link expira en 48h
                `
            })
            res.send({message:'A recovery email was sent to your email address'})
        } catch (error) {

        }
    },
    async ResetPassword(req,res){
        try {  
        const recoverToken=req.body.recoverToken;
        const payload = jwt.verify(recoverToken,'recoverSecret')
        const hash = await bcrypt.hash(req.body.password);
        const user = await UserModel.findOneAndUpdate({email:payload.email},{password:hash})
        res.send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send({message:'There was a problem trying to reset the password'})
        }
    },
    async EditarUsuario(req,res){
        try{
            req.body.rol = req.user.rol;
            req.body.password = req.user.password;
            const update = await UsuarioModel.findByIdAndUpdate(req.user._id, req.body, {
                new: true
            })
            res.send({update, mensaje: 'Usuario actualizado'})
        }catch(error){
            res.status(500).send('No se ha podido actualizar el usuario')
        }
    },
    async EliminarUsuario(req,res){
        try {
            const eliminar = await UsuarioModel.findByIdAndDelete({_id: req.params._id})
            res.send({mensaje: 'Usuario '+req.params._id+ ' eliminado', eliminar})
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al eliminar el usuario')
            console.log(error)
        }
    }
}
module.exports = UsuarioController;