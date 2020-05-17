import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './productos.scss';
import { Button } from 'antd';
import { addCart } from '../../redux/actions';
import axios from 'axios';
import { useEffect } from 'react';
import { connect } from "react-redux";

const Productos = ({producto},{props}) => {
    console.log({props})
    const [usuario, setUsuario] = useState({})
    const token = localStorage.getItem('authToken')
    const ObtenerUsuario = async() =>{
       const res = await axios.get('http://localhost:3000/usuario/user',{
           headers: {
               Authorization: token
           }
       })
        setUsuario(res.data)
    }
    useEffect(() => {
        ObtenerUsuario();
    }, [])
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
        {usuario._id && <Button type="primary" onClick={() => addCart(producto, 1)}>Añadir al carrito</Button> }
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ ...state })
export default connect(mapStateToProps)(Productos);
