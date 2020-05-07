import React, { Component } from 'react';
import './menu.css';
import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';
import mark1 from '../../img/mark1.jpg';
import mark2 from '../../img/mark2.jpg';
import mark3 from '../../img/mark3.jpg';

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
                <div className="container">
                    <div className="row funciones d-flex flex-row justify-content-center align-items-center">
                        <div className="servicios d-flex col-xl-4 col-lg-4 col-md-4">
                            <div className="servicios-icon">
                                <i className="fas fa-truck"></i>
                            </div>
                            <div className="servicios-info">
                                <h5>FREE SHIPING</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ex</p>
                            </div>  
                        </div>
                        <div className="servicios d-flex col-xl-4 col-lg-4 col-md-4">
                            <div className="servicios-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="servicios-info">
                                <h5>24/7 SUPPORT</h5>
                                <p>Lorem ipsum /dolor sit amet consectetur adipisicing elit. Blanditiis ex</p>
                            </div>  
                        </div>
                        <div className="servicios d-flex col-xl-4 col-lg-4 col-md-4">
                            <div className="servicios-icon">
                                <i className="fas fa-reply-all"></i>
                            </div>
                            <div className="servicios-info">
                                <h5>30-DAYS FREE RETURN</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ex</p>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="ofertas col-xl-4 col-lg-4 col-md-4">
                            <img src={mark1} alt="" />
                        </div>
                        <div className="ofertas col-xl-4 col-lg-4 col-md-4">
                            <img src={mark2} alt="" />
                        </div>
                        <div className="ofertas col-xl-4 col-lg-4 col-md-4">
                            <img src={mark3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
