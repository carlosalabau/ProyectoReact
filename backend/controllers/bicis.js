const BiciModel = require('../models/bicicletas');

const BiciController = {
    async Listar(req,res){
        try {
            const bicis = await BiciModel.find();
            res.send(bicis);
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al listar las bicicletas')
        }
    },
    async Novedades(req,res){
        try {
            const nuevas = await BiciModel.find({esNovedad: true});
            res.send(nuevas);
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al mostrar las novedades');
        }
    },
    async Detalles(req,res){
        try {
            const detalles = await BiciModel.findById(req.params._id).populate('usuarioId');
            res.send(detalles)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al mostrar detalle del producto')
        }
    },
    async Nueva(req,res){
        try {
            const nuevaBici = await BiciModel.create(req.body);
            res.send(nuevaBici)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al crear una bicicleta')
        }
    },
    async Actualizar(req,res){
        try {
            const actualizar = await BiciModel.findOneAndUpdate(req.params._id, req.body, {new: true});
            res.send(actualizar)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al actualizar la bicicleta');
            console.log(error)
        }
    }
}
module.exports = BiciController;