import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './productosHome.css';
import Productos from '../Productos/Productos';

 const ProductosHome = () =>{
    const [productos,setProductos] = useState([]);    
    
    const ListarProductos = () =>{
        axios.get('http://localhost:3000/bicicletas')
        .then(res =>
        setProductos(res.data))
       .catch(console.error)
    }
    useEffect(() => {
        ListarProductos();
    }, [])

        return (
            <div className="container">
                <div className="row">
                        {productos.map(produc => <Productos productos={produc} />)}
                </div>
            </div>
        )
    }
export default ProductosHome
