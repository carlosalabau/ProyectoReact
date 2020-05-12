import React from "react";
/* import "./App.css"; */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductosHome from "./components/ProductosHome/ProductosHome";
import Detalles from "./components/DetallesProducto/Detalles";
import Footer from "./components/Footer/Footer";
import Tienda from './containers/Tienda/Tienda';
import Carro from './containers/Carro/Carro';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductosHome} exact />
          <Route path="/detalles/:_id" component={Detalles} exact />
          <Route path="/tienda" component={Tienda} exact />
          <Route path="/carrito" component={Carro} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
