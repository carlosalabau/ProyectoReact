import React, { useState } from 'react'
import { Input } from 'antd';
import Axios from 'axios';
import './InputSearchAnt.scss';
import { Link } from 'react-router-dom';

const InputSearchAnt = () => {

    const { Search } = Input;
    const [busqueda, setBusqueda] = useState([{}]);
    const [bicis, setBicis] = useState([{}])
    const PelisBuscador = async (event) => {
        setBusqueda(event.target.value);
        console.log(busqueda)
        const bicicletas = await Axios.get('http://localhost:3000/bicicletas/marca/' + busqueda)
        setBicis(bicicletas.data)
        console.log(bicis)
    }


    return (
        <React.Fragment>
            <div class="modal-header">
                <Search onKeyUp={PelisBuscador} placeholder="Ejemplo: Focus Raven" onSearch={value => console.log(value)} />
            </div>
            <div className="modal-body">
                {bicis.map((bici) => (
                    <Link className="producto" key={bici._id} to={'/detalles/' + bici._id}>
                    <div className="row flex-row" id={bici}>
                        <div className="imagen-busqueda col-lg-4 col-xl-4 col-md-4"><img src={bici.imagen} /></div>
                        <div className="marca-busqueda col-lg-6 col-xl-6 col-md-6 d-flex align-items-center">{bici.marca}</div>
                        <div className="precio-busqueda col-lg-2 col-xl-2 col-md-2 d-flex align-items-center">{bici.precio}€</div>
                    </div>
                </Link>
                ))}
            </div>
        </React.Fragment>

    )
}
export default InputSearchAnt;