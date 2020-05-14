import React from 'react';
import '../../Menu/menu.css'

const Submenu = () => {
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="owl-carousel">
                    <div>
                        <h4>
                            <img src='img/slide1.jpg' alt="..." />
                        </h4>
                    </div>
                    <div>
                        <h4>   
                            <img src='img/slide2.jpg' alt="..." />
                        </h4>
                    </div>
                    <div>
                        <h4>
                            <img src='img/slide3.jpg' alt="..." />
                        </h4>
                    </div>
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
                        <img src='img/mark1.jpg' alt="" />
                    </div>
                    <div className="ofertas col-xl-4 col-lg-4 col-md-4">
                        <img src='img/mark2.jpg' alt="" />
                    </div>
                    <div className="ofertas col-xl-4 col-lg-4 col-md-4">
                        <img src='img/mark3.jpg' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Submenu;