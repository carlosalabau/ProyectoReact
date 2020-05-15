const BiciModel = require('../models/bicicletas');

const actualizarStock = async(producto) => {
    try {
        const bici = await BiciModel.findByIdAndUpdate(producto._id, {
            $inc: {
                cantidad: -producto.nCantidad
            }
        }, {
            new: true
        });
        return bici;
    } catch (error) {
        console.log(error)
    }
}
module.exports = {actualizarStock};