import React from 'react'
import {Link} from 'react-router-dom';
import './productos.css';

 const Productos = ({productos}) => {
    return (
            <div className="col-xl-4 col-lg-4 col-md-4 box-product">
                <Link className="producto" key={productos._id} to={'/detalles/' +productos._id}>
                    <div className="imagen-producto d-flex justify-content-center">
                        <img src={productos.imagen} alt="Producto" />   
                    </div>
                    <p className="categoria">{productos.categoria}</p>
                    <div className="d-flex flex-row justify-content-between">
                        <span className="marca">{productos.marca}</span>
                        <span className="precio">{productos.precio}€</span>
                    </div>
                </Link>
            </div>
       
    )
}

export default Productos;
