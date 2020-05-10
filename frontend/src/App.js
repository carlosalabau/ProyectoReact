import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import ProductosHome from "./components/ProductosHome/ProductosHome";
import Detalles from "./components/DetallesProducto/Detalles";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductosHome} exact />
          <Route path="/detalles/:_id" component={Detalles} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
