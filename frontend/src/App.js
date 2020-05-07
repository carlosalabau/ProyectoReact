import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import ProductosHome from './components/ProductosHome/ProductosHome';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
      <Switch>
      <Route path="/" component={ProductosHome} exact/>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
