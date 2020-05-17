import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu'
import { Button } from 'antd';
import { addCart } from '../../redux/actions';
import { connect } from "react-redux";
import Productos from '../../components/Productos/Productos'
import './tienda.scss';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}€`;
}

const Tienda = () => {

    const [categoria, setCategoria] = useState('')

    const ListarPorCategoria = async (event) => {
        const cat = event.target.value;
        setCategoria(cat);
        console.log(cat)
        await axios.get("http://localhost:3000/bicicletas/categoria/" + cat);
      };

    const classes = useStyles();
    const [value, setValue] = React.useState([300, 4700]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [bicis, setBicis] = useState([]);

    const MostrarBicis = async () => {
        const bicicletas = await axios.get('http://localhost:3000/bicicletas/');
        setBicis(bicicletas.data);
        console.log(bicicletas.data)
        setCategoria()
    }
    useEffect(() => {
        MostrarBicis();
    }, [value[0], value[1]])

    return (
        <React.Fragment>
            <Menu />
            <div className="container-fluid">
                <div className="row">
                    <ul className="flex-row d-flex detalle align-items-center justify-content-center">
                        <li>Inicio</li>><li>Tienda</li>
                    </ul>
                </div>
            </div>
            <div className="container tienda">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="filtroCat">
                            <h6>CATEGORIAS</h6>
                            <ul>
                                <li><Button className="btnCat" onClick={ListarPorCategoria} value="carretera">Carretera</Button></li>
                                <li><Button className="btnCat" onClick={ListarPorCategoria} value="montaña">Montaña</Button></li>
                                <li><Button className="btnCat" onClick={ListarPorCategoria} value="urbana">Urbanas</Button></li>
                                <li><Button className="btnCat" onClick={MostrarBicis}>Todas</Button></li>
                            </ul>
                        </div>
                        <div className="filtroPrecio">
                            <h6>FILTRAR PRECIO</h6>
                            <div className={classes.root}>
                                <Slider
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                    max={4700} min={300} step={100}
                                />
                                <Typography id="range-slider" gutterBottom>
                                    Filtro: {value[0]}€ - {value[1]}€
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 filtroProductos">
                        {!categoria ?
                        bicis.slice(0, 12).filter(price => price.precio > value[0] && price.precio < value[1]).map((producto) => (
                            <div className="col-xl-3 col-lg-3 col-md-3 box-padre FiltroPadre">
                                <div className="box-product filtroProduct">
                                    <Link className="producto" key={producto._id} to={'/detalles/' + producto._id}>
                                        <div className="imagen-producto d-flex justify-content-center">
                                            <img src={producto.imagen} alt="Producto" />
                                        </div>
                                        <p className="categoria">{producto.categoria}</p>
                                        <div className="d-flex flex-row justify-content-between">
                                            <span className="marca">{producto.marca}</span>
                                            <span className="precio">{producto.precio}€</span>
                                        </div>
                                    </Link>
                                    <div className="btn-carrito-tienda">
                                        <Button onClick={() => addCart(producto, 1)}>Añadir al carrito</Button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        bicis.filter((nov) => nov.categoria === categoria)
                            .map((nov) => (
                              <Productos key={nov._id} producto={nov} />
                            ))
                     }
                    </div>
                </div>
            </div>
        </ React.Fragment>
    )
}
const mapStateToProps = (state) => ({ cart: state.cart })
export default connect(mapStateToProps)(Tienda);
