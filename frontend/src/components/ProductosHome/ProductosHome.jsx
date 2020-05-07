import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './productosHome.css';
import Productos from '../Productos/Productos';
import oferta1 from '../../img/oferta1.jpg';
import oferta2 from '../../img/oferta2.png';
import oferta3 from '../../img/oferta3.png';
import oferta4 from '../../img/oferta4.png';


 const ProductosHome = () =>{
    const [productos,setProductos] = useState([]);   
    const [novedades,setNovedades] = useState([]);  
    
    const ListarProductos = () =>{
        axios.get('http://localhost:3000/bicicletas')
        .then(res =>
        setProductos(res.data))
       .catch(console.error)
    }
    const ListarNovedades = async () => {
        try {
            const novedades = await axios.get('http://localhost:3000/bicicletas/novedades');
            setNovedades(novedades.data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        ListarProductos();
        ListarNovedades();
    }, [])

        return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-item-center">
                    <div className="titulo-productos d-flex flex-column">
                        <h6>Más Vendidos</h6>
                        <h3><span>PRODUCTOS DESTACADOS</span></h3>
                    </div>
                </div>
                <div className="row">
                    {productos.map(produc => <Productos productos={produc} />)}
                </div>
            </div>
            <div className="contenedor d-flex">
                <div className="col-lg-6 col-xl-6 col-md-6 ofertas">
                    <img src={oferta1} alt=""/>
                </div>
                <div className="owl-carousel col-lg-6 col-xl-6 col-md-6 ofertas">
                    <div className="item"><h4><img src={oferta2} alt=""/></h4></div>
                    <div className="item"><h4><img src={oferta3} alt=""/></h4></div>
                    <div className="item"><h4><img src={oferta4} alt=""/></h4></div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center align-item-center">
                    <div className="titulo-productos d-flex flex-column">
                        <h6>Pasea con estilo</h6>
                        <h3><span>NUEVOS PRODUCTOS</span></h3>
                    </div>
                </div>
                <div className="row">
                    {novedades.map(produc => <Productos productos={produc} /> )}
                </div>
            </div>
        </div>
        )
    }
export default ProductosHome
