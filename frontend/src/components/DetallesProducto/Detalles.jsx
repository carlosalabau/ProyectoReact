import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detalle.css";
import { InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';


function onChange(value) {
  console.log('changed', value);
}

const Detalles = () => {
  const [producto, setProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const { _id } = useParams();
  const { category } = useParams();

  const ListarDetalles = async () => {
    const res = await axios.get(
      "http://localhost:3000/bicicletas/detalles/" + _id
    );
    console.log(res.data);
    setProducto(res.data);
  };
  const ListarCategoria = async () => {
    const res = await axios.get(
      "http://localhost:3000/bicicletas/categoria/" + category
    );
    console.log(res.data);
    setCategoria(res.data);
  };
  useEffect(() => {
    ListarDetalles();
    ListarCategoria();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid">
        
        <div className="row">
          <ul className="flex-row d-flex detalle align-items-center justify-content-center">
            <li>Inicio</li>><li>Bicicletas</li>><li>{producto.marca}</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row flex-row justify-content-center align-items-center">
        
          <div className="imagen col-xl-6 col-lg-6 col-md-6">
            <img src={producto.imagen} alt="" />
          </div>
          <div className="info col-xl-6 col-lg-6 col-md-6">
            <h3 className="pb-3">{producto.marca}</h3>
            <p className="font-weight-bold">{producto.precio}€</p>
            <p className="desc">{producto.descripcion}</p>
            <div className="addCarrito">
              <span className="qty">Cantidad: </span><InputNumber className="input" min={1} max={10} defaultValue={1} onChange={onChange} />
              <Button type="primary" className="boton">
              Añadir al carrito <i className="fas fa-shopping-cart"></i> 
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Detalles;
