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
            const detalle = await BiciModel.findById(req.params._id)/* .populate('usuarioId'); */
            res.send(detalle)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al mostrar detalle del producto')
        }
    },
    async PorCategoria(req,res){
        try {
            const nombre = await BiciModel.find({categoria: req.params.categoria});
            res.send(nombre)
        } catch (error) {
           res.status(500).send('Ha ocurrido un error al buscar por Categoria') 
        }
        
    },
    async PorNombre(req,res){
        try {
            const marca = new RegExp(`${req.params.marca}`, 'i');
            const bicis = await BiciModel.find({
                marca
            })
            res.send(bicis)
        } catch (error) {
            res.status(500).send({mensaje:'Ha ocurrido un error al buscar por marca'})
            console.log(error)
        }
    },
    async Nueva(req,res){
        try {
            const nuevaBici = await BiciModel.create(req.body);
            res.send(nuevaBici)
        } catch (error) {
            res.status(500).send('Ha ocurrido un error al crear una bicicleta')
        }
    }
}
module.exports = BiciController;