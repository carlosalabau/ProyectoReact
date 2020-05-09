var express = require('express');
var router = express.Router();
const UsuarioController = require('../controllers/usuarios')
const { autenticacion, isPermiso } = require('../middleware/autenticacion.js')

/* GET home page. */

router.get('/user', autenticacion, UsuarioController.InfoUsuario);
router.post('/login', UsuarioController.Login);
router.post('/registrar', UsuarioController.Registrar);
router.put('/actualizar',autenticacion, UsuarioController.EditarUsuario)
router.delete('/eliminar/:_id',autenticacion, isPermiso, UsuarioController.EliminarUsuario);
router.get('/logout',autenticacion, UsuarioController.Logout);
router.get('/recover/:email', UsuarioController.Recover);
router.post('/reset', UsuarioController.ResetPassword);
router.get('/',autenticacion, isPermiso, UsuarioController.ListarUsuarios);

module.exports = router;
