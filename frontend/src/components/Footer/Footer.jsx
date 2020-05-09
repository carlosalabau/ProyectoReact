import React from "react";
import './footer.scss';

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3">
            <h2>BICISHOP</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quis ut rem? Modi, reiciendis facere magnam saepe aliquid amet
            </p>
            <div className="iconFooter d-flex flex-column">
              <div>
                <i class="fas fa-phone-alt"></i> 9612345678
              </div>
              <div>
                <i class="fas fa-street-view"></i> Avda Moll de Ponent, 27
              </div>
              <div>
                <i class="far fa-envelope-open"></i> contacto@carlosalabau.com
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <h4>Sobre Nosotros</h4>
            <ul>
              <li>Sobre nosotros</li>
              <li>Contacta</li>
              <li>Blog</li>
              <li>Historia</li>
              <li>Terminos y condiciones</li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <h4>Servicio tecnico</h4>
            <ul>
              <li>Politica de envios</li>
              <li>Compensacion</li>
              <li>Politica de entrega</li>
              <li>FAQ's</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <h4>Newsletter</h4>
            <input type="text" />
            <p>
              Sign up get 20% sale off for first time, Get all the latest deals
              and special offers, first. Follow Us:
            </p>
              
              <ul className="redes">
              <li>Siguenos: </li>
                <li>
                  <i class="fab fa-facebook"></i>
                </li>
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
                <li>
                  <i class="fab fa-youtube"></i>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
