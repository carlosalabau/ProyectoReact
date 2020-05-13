import React, { useEffect } from 'react'
import { Button } from 'antd';
import Menu from '../../components/Menu/Menu'
import { connect } from "react-redux";


const Carro = (props) => {
    console.log(props.cart)

    useEffect(() => {
        {
            props.cart.forEach(element =>
                console.log(element[0]))
        }

    }, [])
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
                        {/* {props.cart.map(product =>
                            <tr>
                                <td>{product[0].marca}</td>
                                <td>{product[0].precio}</td>
                                <td>{product[1].cant}</td>
                                <td>{product[0].precio * product[0].cantidad}</td>
                            </tr>
                        )} */}
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
const mapStateToProps = (state) => ({ cart: state.cart })
export default connect(mapStateToProps)(Carro);