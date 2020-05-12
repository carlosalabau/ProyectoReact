import React, { useEffect } from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu'
import { Button } from 'antd';
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

    const classes = useStyles();
    const [value, setValue] = React.useState([300, 4700]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [bicis, setBicis] = useState([]);

    const MostrarBicis = async () => {
        const bicicletas = await Axios.get('http://localhost:3000/bicicletas/');
        setBicis(bicicletas.data);
        console.log(bicicletas.data)
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
                                <li>Montaña</li>
                                <li>Carretera</li>
                                <li>Urbano</li>
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
                        {bicis.slice(0, 12).filter(price => price.precio > value[0] && price.precio < value[1]).map((productos) => (
                            <div className="col-xl-3 col-lg-3 col-md-3 box-padre FiltroPadre">
                                <div className="box-product filtroProduct">
                                    <Link className="producto" key={productos._id} to={'/detalles/' + productos._id}>
                                        <div className="imagen-producto d-flex justify-content-center">
                                            <img src={productos.imagen} alt="Producto" />
                                        </div>
                                        <p className="categoria">{productos.categoria}</p>
                                        <div className="d-flex flex-row justify-content-between">
                                            <span className="marca">{productos.marca}</span>
                                            <span className="precio">{productos.precio}€</span>
                                        </div>
                                        <div className="btn-carrito">
                                            <Button type="primary">Añadir al carrito</Button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ React.Fragment>
    )
}
export default Tienda;
