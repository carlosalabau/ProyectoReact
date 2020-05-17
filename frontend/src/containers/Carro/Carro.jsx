import React, { useState } from 'react'
import { Button } from 'antd';
import Menu from '../../components/Menu/Menu'
import { connect } from "react-redux";
import { clearCart } from '../../redux/actions'
import { Link } from 'react-router-dom';
import './carro.scss';
import { notification } from 'antd';
import Axios from 'axios';

const Carro = (props) => {

    const token = localStorage.getItem('authToken')
    const [mostrar, setMostrar] = useState(true)

    const finalizarPedido = async () => {
        if (props.user) {
            await Axios.post('http://localhost:3000/pedidos/agregar',
                { productosId: props.cart.map(producto => producto._id), total: props.cart.reduce((pre, cur) => pre + cur.total, 0) },
                {
                    headers: {
                        Authorization: token
                    }
                })
            setTimeout(() => {
                clearCart()
                setMostrar(false);
            })
        } else {
            return (notification.error({ message: 'Necesitas loguearte antes' }))
        }
    }
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
                {mostrar ?
                    <div className="row filaCart" >
                        {props.cart.length > 0 &&
                            <table className="col-xl-8 col-lg-8 col-md-8 compras">
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
                                {props.cart.length > 0 &&
                                    <tr>
                                        <td>
                                            <Button type="primary" danger onClick={() => clearCart()}>Vaciar carrito</Button>
                                        </td>
                                    </tr>
                                }
                            </table>
                        }
                        {props.cart.length > 0 ?
                            <div className="totales">
                                <h1>Importe total</h1>
                                <p>Subtotal: {(props.cart.reduce((pre, cur) => pre + cur.total, 0)).toFixed(2)}€</p>
                                <p>Total: {(props.cart.reduce((pre, cur) => pre + cur.total, 0)).toFixed(2)}€</p>
                                <p><Button type="primary" onClick={() => finalizarPedido()}>Finalizar pedido</Button></p>
                            </div>
                            :
                            <tr>
                                <td className="carritoVacio">
                                    <p>Tu carrito esta vacio</p>
                                    <Link to="/tienda"><Button type="primary">Volver a la tienda</Button></Link>
                                </td>
                            </tr>
                        }

                    </div>
                    :
                    `Gracias ${props.user.nombre} por realizar el pedido. En breve lo tendras en tu domicilio.`
                }
            </div>
        </div >
    )
}
const mapStateToProps = (state) => ({ ...state })
export default connect(mapStateToProps)(Carro);