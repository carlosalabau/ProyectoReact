import React, { useEffect } from "react";
import "./menu.css";
import InputSearchAnt from '../../containers/InputSearchAnt/InputSearchAnt';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import ModalRegistro from '../ModalRegistro/ModalRegistro'
import ModalLogin from '../ModalLogin/ModalLogin'
import { Button, notification } from 'antd';
import { logout } from "../../redux/actions";

const Menu = (props) => {
  const history = useHistory();
  const CerrarSesion = () =>{
    logout()
    notification.success({ message: 'Usuario desconectado con éxito' });
    setTimeout( ()=>{
      history.go('/')
    }, 1000)
  }

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
          <li>
            <a data-toggle="modal" data-target="#Buscador">
              <i className="fas fa-search"></i>
            </a>
          </li>
          {!props.user ?
            <li>
              <a data-toggle="modal" data-target="#Login">
                <i className="far fa-user"></i>
              </a>
            </li>
            :
            <li className="carEmpty">
              <i className="far fa-user"></i>
              <div className="empty">
                <h6>Bienvenido {props.user.nombre}</h6>
                <Button type="primary" danger onClick={() => CerrarSesion()}>Cerrar sesión</Button>
                </div>
            </li>
          }
          {props.cart[0] ?
            <Link to={'/carrito'}>
              <li>
                <i className="fas fa-shopping-cart"></i>
              </li>
            </Link>
            : 
              <li className="carEmpty">
               <i className="fas fa-shopping-cart"></i>
               <div className="empty">
                 <p><i class="fas fa-shopping-cart"></i></p>
                 <h6>No hay productos en el carrito</h6></div>
             </li> 
          }
        </ul>
      </div>
      <ModalRegistro />
      <ModalLogin />
      {/* MODAL BUSCADOR */}
      <div class="modal fade" id="Buscador" tabindex="-1" role="dialog" aria-labelledby="Buscador" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <InputSearchAnt />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ ...state })
export default connect(mapStateToProps)(Menu);