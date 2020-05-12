import React from 'react'
import { Button } from 'antd';
import Menu from '../../components/Menu/Menu'

const Carro = () => {
    return (
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="row">
                    <ul className="flex-row d-flex detalle align-items-center justify-content-center">
                        <li>Inicio</li>><li>Carrito</li>
                    </ul>
                </div>
            </div>
            <div className="container">
            <h1>Carrito</h1>
                <div className="row">
                    <table className="col-xl-8 col-lg-8 col-md-8">
                        <tr>
                            <td>Producto</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>Total</td>
                        </tr>
                    </table>
                    <div className="totales">
                        <h1>Importe total</h1>
                        <p>Subtotal: </p>
                        <p>Total</p>
                        <p><Button type="primary">Finalizar pedido</Button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carro;