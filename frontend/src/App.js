import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Contenido from './components/Contenido';
import ListarProductos from './components/Productos';

function App() {
  return (
    <div>
      <Menu />
      <Contenido />
      <ListarProductos />
    </div>
  );
}

export default App;
