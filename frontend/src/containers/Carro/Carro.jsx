import React, { useEffect } from 'react'
import { Button } from 'antd';
import Menu from '../../components/Menu/Menu'
import { connect } from "react-redux";
import { clearCart } from '../../redux/actions'
import { Link } from 'react-router-dom';

const Carro = (props) => {

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
                        {props.cart.map(product =>
                            <tr>
                                <td>{product.marca}</td>
                                <td>{product.precio}</td>
                                <td>{product.nCantidad}</td>
                                <td>{product.precio}€</td>
                            </tr>
                        )}
                        {props.cart.length > 0 ?
                            <tr>
                                <td><Button type="primary" danger onClick={() => clearCart()}>Vaciar carrito</Button></td>
                            </tr>
                            :
                            <tr>
                                <td><Link to="/tienda"><Button type="primary">Volver a la tienda</Button></Link></td>
                            </tr>
                        }
                    </table>
                    <div className="totales">
                        <h1>Importe total</h1>
                        <p>Subtotal: {(props.cart.reduce((pre, cur) => pre + cur.total, 0)).toFixed(2)}€</p>
                        <p>Total: {(props.cart.reduce((pre, cur) => pre + cur.total, 0)).toFixed(2)}€</p>
                        <p><Button type="primary">Finalizar pedido</Button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ cart: state.cart })
export default connect(mapStateToProps)(Carro);