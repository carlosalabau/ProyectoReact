import React, { Component } from 'react';
import '../styles/menu.css';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';

export default class Menu extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-between align-items-center menu">
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
                <div className="row ">
                <div className="owl-carousel owl-theme">
                    <div><h4><img src={slide1} alt="..." /></h4></div>
                    <div><h4><img src={slide2} alt="..." /></h4></div>
                    <div><h4><img src={slide3} alt="..." /></h4></div>
                </div>
                </div>
            </div>
        )
    }
}
