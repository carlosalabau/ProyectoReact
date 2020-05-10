import React from "react";
import "./menu.css";
import Axios from "axios";
import { notification } from 'antd';


const Menu = () => {

  const Registro = (event) => {
    const user = {
      nombre: event.target.nombre.value,
      ciudad: event.target.ciudad.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    Axios.post('http://localhost:3000/usuario/registrar', user)
      .then(() => {
        setTimeout(() => {
          document.querySelector('.modal').getElementsByClassName.display = 'none';
          notification.success({ message: 'Usuario creado con éxito' });
          console.log(user)
        }, 2000)
      })
      .catch(console.error)
  }

  const Login = (event) =>{
    console.log('LOGIN')
    const user ={
      email: event.target.Lemail.value,
      password: event.target.Lpassword.value
    }
    
    Axios.post('http://localhost:3000/usuario/login', user)
    .then( res =>{ 
      
      setTimeout(() => {
        localStorage.setItem('authToken', res.data.token);
         notification.success({ message: 'Usuario logueado con éxito' }); 
        console.log(user)
      },2000)
    })
    .catch(console.error)
  }


  return (
    <div className="container-fluid">
      <div id="nav" className="row d-flex justify-content-between align-items-center menu">
        <p className="logo">BICISHOP</p>
        <ul className="d-flex flex-row">
          <a href="#">
            <li>Inicio</li>
          </a>
          <a href="#">
            <li>Tienda</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contacto</li>
          </a>
        </ul>
        <ul className="d-flex flex-row iconos">
          <li>
            <i className="fas fa-search"></i>
          </li>
          <li>
            <a data-toggle="modal" data-target="#ModalRegistro">
              <i className="far fa-user"></i>
            </a>
          </li>
          <li>
            <i className="fas fa-shopping-cart"></i>
          </li>
        </ul>
      </div>
      {/*  MODAL REGISTRO */}
      <div className="modal fade" id="ModalRegistro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Registro</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={Registro}>
                <div className="form-group">
                  <label for="Nombre">Nombre de usuario</label>
                  <input type="text" className="form-control" name="nombre" placeholder="Introduce tu email" />
                </div>
                <div className="form-group">
                  <label for="Ciudad">Ciudad</label>
                  <input type="text" className="form-control" name="ciudad" placeholder="Introduce tu ciudad" />
                </div>
                <div className="form-group">
                  <label for="Email">Email</label>
                  <input type="email" className="form-control" placeholder="Introduce tu email" name="email" />
                </div>
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input type="password" className="form-control" placeholder="Introduce tu contraseña" name="password" />
                  <small className="form-text text-muted">Nunca compartas la contraseña con nadie. Jamás te la pediriamos</small>
                </div>
                <button type="submit" className="btn btn-success">Registrarse</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-dismiss="modal" data-target="#ModalLogin" >LogIn</button>
            </div>
          </div>
        </div>
      </div>
      {/* //MODAL LOGIN */}
      <div className="modal fade" id="ModalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">LOGIN</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={Login}>
                <div className="form-group">
                  <label for="Email">Email</label>
                  <input type="email" className="form-control" name="Lemail" placeholder="Introduce tu email" />
                </div>
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input type="password" className="form-control" name="Lpassword" placeholder="Introduce tu contraseña" />
                  <small className="form-text text-muted">Nunca compartas la contraseña con nadie. Jamás te la pediriamos</small>
                </div>
                <button type="submit" className="btn btn-warning" data-dismiss="modal">LogIn</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#ModalRegistro" data-dismiss="modal">Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;