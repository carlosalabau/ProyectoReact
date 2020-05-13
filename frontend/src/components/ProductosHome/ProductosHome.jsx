import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./productosHome.css";
import Productos from "../Productos/Productos";
import oferta1 from "../../img/oferta1.jpg";
import oferta2 from "../../img/oferta2.png";
import oferta3 from "../../img/oferta3.png";
import oferta4 from "../../img/oferta4.png";
import Submenu from "../Menu/Submenu/Submenu";
import Menu from '../Menu/Menu';
import { Button, Carousel } from 'antd';
import { Link } from "react-router-dom";





const ProductosHome = () => {

  const [productos, setProductos] = useState([]);
  const [novedades, setNovedades] = useState([]);
  const [categoria, setCategoria] = useState('carretera')

  const ListarProductos = () => {
    axios
      .get("http://localhost:3000/bicicletas")
      .then((res) => setProductos(res.data))
      .catch(console.error);
  };
  const ListarNovedades = async () => {
    try {
      const novedad = await axios.get("http://localhost:3000/bicicletas");
      setNovedades(novedad.data);
    } catch (error) {
      console.log(error);
    }
  };
  const ListarPorCategoria = async (event) => {
    const cat = event.target.value;
    setCategoria(cat);
    console.log(cat)
    await axios.get("http://localhost:3000/bicicletas/categoria/" + cat);
  };
  useEffect(() => {
    ListarProductos();
    ListarNovedades();
  }, []);

  return (
    <Fragment>
      <Menu />
      <Submenu />
      <div className="container">
        <div className="row justify-content-center align-item-center">
          <div className="titulo-productos d-flex flex-column">
            <h6 className="d-flex justify-content-center">Más Vendidos</h6>
            <h3 className="d-flex justify-content-center">
              <span>PRODUCTOS DESTACADOS</span>
            </h3>
          </div>
        </div>
        <div className="row">
          {productos.slice(0, 6).map((produc) => (
            <Productos key={produc._id} producto={produc} />
          ))}
        </div>
      </div>
      <div className="container-fluid offers">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-6 ofertas">
            <img src={oferta1} alt="..." />
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 carrousel2">
            <Carousel autoplay>
              <div>
                <h3><img src={oferta2} alt="..." /></h3>
              </div>
              <div>
                <h3><img src={oferta3} alt="..." /></h3>
              </div>
              <div>
                <h3><img src={oferta4} alt="..." /></h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-item-center">
          <div className="titulo-productos d-flex flex-column">
            <h6 className="d-flex justify-content-center">Pasea con estilo</h6>
            <h3 className="d-flex justify-content-center">
              <span>NUEVOS PRODUCTOS</span>
            </h3>
            <ul className="d-flex flex-row justify-content-center filtro-categoria">
              <li><Button className="btnCat" onClick={ListarPorCategoria} value="carretera">Carretera</Button></li>
              <li><Button className="btnCat" onClick={ListarPorCategoria} value="montaña">Montaña</Button></li>
              <li><Button className="btnCat" onClick={ListarPorCategoria} value="urbana">Urbanas</Button></li>
            </ul>
          </div>
        </div>
        <div className="row">
          {novedades
            .filter((nov) => nov.categoria === categoria).slice(0,3)
            .map((nov) => (
              <Productos key={nov._id} producto={nov} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};
export default ProductosHome;
