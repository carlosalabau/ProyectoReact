import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import ProductosHome from './components/ProductosHome/ProductosHome';
import Detalles from './components/DetallesProducto/Detalles';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
      <Switch>
      <Route path="/" component={ProductosHome} exact/>
      <Route path="/detalles/:_id" component={Detalles} exact/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
