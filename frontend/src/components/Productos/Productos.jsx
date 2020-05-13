import React from 'react'
import { Link } from 'react-router-dom';
import './productos.scss';
import { Button } from 'antd';
import { addCart } from '../../redux/actions';
import { connect } from "react-redux";

const Productos = ({producto}) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 box-padre">
            <div className="box-product">
                <Link className="producto" to={'/detalles/' + producto._id}>
                    <div className="imagen-producto d-flex justify-content-center">
                        <img src={producto.imagen} alt="Producto" />
                    </div>
                    <p className="categoria">{producto.categoria}</p>
                    <div className="d-flex flex-row justify-content-between">
                        <span className="marca">{producto.marca}</span>
                        <span className="precio">{producto.precio}€</span>
                    </div>
                </Link>
                <div className="btn-carrito">
                    <Button type="primary" onClick={() => addCart(producto)}>Añadir al carrito</Button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ cart: state.cart })
export default connect(mapStateToProps)(Productos);
