import React, { useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/productos.css';

 const ListarProductos = () =>{
    const [productos,setProductos] = useState([]);     
    
    useEffect(() => {
        axios.get('http://localhost:3000/bicicletas')
          .then(res =>
          setProductos(res.data))
         .catch(console.error)
    }, [])

        return (
            <div className="container">
                <div className="row">
                {productos.map(produc =>
                <div className="col-xl-4 col-lg-4 col-md-4">
                        <img src={produc.imagen} alt="Producto" />
                        
                        <p>{produc.precio}</p>
                    </div> 
                    )}
                </div>
            </div>
        )
    }
export default ListarProductos
