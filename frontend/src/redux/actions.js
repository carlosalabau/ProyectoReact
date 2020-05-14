
import axios from 'axios';
import store from './store';
import { notification } from 'antd';

 export const login = async(user) => {
    const res = await axios.post('http://localhost:3000/usuario/login', user);
    localStorage.setItem('authToken', res.data.token); //guardamos el token en localstorage
    store.dispatch({ //this.userService.setUser(res.user)
        type: 'LOGIN',
        payload: res.data.user //La respuesta del backend me devuelve user y lo guardo en el payload
    });
}
export const addCart = async(producto, cant) => {
    console.log('ACTION', cant)
    notification.success({ message: 'Producto añadido al carrito' });
    store.dispatch({
        type: 'ADD_CART',
        payload:{...producto, nCantidad: cant, total: producto.precio*cant}
    })
}
export const clearCart = async(cart) =>{
    store.dispatch({
        type: 'CLEAR_CART',
        payload: cart
    })
}