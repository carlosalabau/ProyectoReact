import React from 'react'
import {Link} from 'react-router-dom';
import './productos.css';

 const Productos = ({productos}) => {
    return (
            <div className="col-xl-4 col-lg-4 col-md-4">
                <Link className="producto" key={productos._id} to={'/detalles/' +productos._id}>
                    <img src={productos.imagen} alt="Producto" />
                    <p>{productos.precio}€</p>
                </Link>
            </div>
       
    )
}

export default Productos;
