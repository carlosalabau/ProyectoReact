import React from "react";
import "./menu.css";
import InputSearchAnt from '../../containers/InputSearchAnt/InputSearchAnt';
import { NavLink, Link } from 'react-router-dom';
import { connect } from "react-redux";
import ModalRegistro from '../ModalRegistro/ModalRegistro'
import ModalLogin from '../ModalLogin/ModalLogin'

const Menu = (props) => {

  return (
    <div className="container-fluid">
      <div id="nav" className="row d-flex justify-content-between align-items-center menu">
        <p className="logo">BICISHOP</p>
        <ul className="d-flex flex-row">
          <NavLink to='/' exact>
            <li>Inicio</li>
          </NavLink>
          <NavLink to="/tienda" exact>
            <li>Tienda</li>
          </NavLink>
          <NavLink to="/blog">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contacto">
            <li>Contacto</li>
          </NavLink>
        </ul>
        <ul className="d-flex flex-row iconos">
          <a data-toggle="modal" data-target="#Buscador">
            <li>
              <i className="fas fa-search"></i>
            </li>
          </a>
          <li>
            {!props.user ?
              <a data-toggle="modal" data-target="#ModalRegistro">
                <i className="far fa-user"></i>
              </a>
              :
              <i className="far fa-user"></i>
            }
          </li>
          <Link to={'/carrito'}>
            <li>
              <i className="fas fa-shopping-cart"></i>
            </li>
          </Link>
        </ul>
      </div>
      <ModalRegistro />
       <ModalLogin />     
      {/* MODAL BUSCADOR */}
      <div class="modal fade" id="Buscador" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <InputSearchAnt />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(Menu);