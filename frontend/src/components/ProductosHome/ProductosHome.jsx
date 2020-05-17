import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./productosHome.scss";
import Productos from "../Productos/Productos";
import Menu from '../Menu/Menu';
import { Carousel } from 'antd';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProductosHome = (props) => {

  const [productos, setProductos] = useState([]);
  const [orden, setOrden] = useState([])

  const ListarProductos = () => {
    axios
      .get("http://localhost:3000/bicicletas")
      .then((res) => setProductos(res.data))
      .catch(console.error);
  };
  const ordenarProductos = async () => {
    const res = await axios.get("http://localhost:3000/bicicletas");
    setOrden(res.data.sort((a, b) => (a.vendidas < b.vendidas ? 1 : a.vendidas > b.vendidas ? -1 : 0)));
  };

  useEffect(() => {
    ListarProductos();
    ordenarProductos();
  }, []);

  return (
    <Fragment>
      <Menu />
      <Carousel autoplay>
        <div className="imagenCarousel">
          <h3>
              <p className="tit1">Wind killer</p>
              <h1 className="tit2">LIGHT<br /> AND FASTER</h1>
              <Link to="/tienda"><button type="button" className="btn btn-tit">Tienda</button></Link>
              <img src='img/slide1.jpg' alt="..." />
          </h3>
        </div>
        <div className="imagenCarousel">
          <h3>
            <p className="tit1">Ride in style</p>
            <h1 className="tit2">BIKE LIGHT<br /> COMPARISON</h1>
            <Link to="/tienda"><button type="button" className="btn btn-tit">Tienda</button></Link>
            <img src='img/slide2.jpg' alt="..." />
          </h3>
        </div>
        <div className="imagenCarousel">
          <h3>
            <p className="tit1">Save up to 40%</p>
            <h1 className="tit2">BIG BIKE <br /> FLASH SALE</h1>
            <Link to="/tienda"><button type="button" className="btn btn-tit">Tienda</button></Link>
            <img src='img/slide3.jpg' alt="..." />

          </h3>
        </div>
      </Carousel>
      <div className="container">
        <div className="row justify-content-center align-item-center">
          <div className="titulo-productos d-flex flex-column">
            <h6 className="d-flex justify-content-center">Pasea con estilo</h6>
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
            <img src='img/oferta1.jpg' alt="..." />
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 carrousel2">
            <Carousel autoplay>
              <div>
                <h3><img src='img/oferta2.png' alt="..." /></h3>
              </div>
              <div>
                <h3><img src='img/oferta3.png' alt="..." /></h3>
              </div>
              <div>
                <h3><img src='img/oferta4.png' alt="..." /></h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-item-center">
          <div className="titulo-productos d-flex flex-column">
            <h6 className="d-flex justify-content-center">Más vendidas</h6>
            <h3 className="d-flex justify-content-center">
              <span>PRODUCTOS DESTACADOS</span>
            </h3>
           {/*  <ul className="d-flex flex-row justify-content-center filtro-categoria">
              <li><Button className="btnCat" onClick={ListarPorCategoria} value="carretera">Carretera</Button></li>
              <li><Button className="btnCat" onClick={ListarPorCategoria} value="montaña">Montaña</Button></li>
              <li><Button className="btnCat" onClick={ListarPorCategoria} value="urbana">Urbanas</Button></li>
            </ul> */}
          </div>
        </div>
        <div className="row">
          {console.log(orden.map(prod=> prod.vendidas))}
          {orden.slice(0,3)
            .map(nov =>(
              <Productos key={nov._id} producto={nov} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(ProductosHome);
