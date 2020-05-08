import React, { Component } from 'react';
import './menu.css';


export default class Menu extends Component {
    render() {
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
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="far fa-user"></i></li>
                        <li><i className="fas fa-shopping-cart"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}
