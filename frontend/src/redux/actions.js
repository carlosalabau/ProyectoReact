
import axios from 'axios';
import store from './store';


export const login = async(user) => {
    const res = await axios.post('http://localhost:3000/usuario/login', user);
    localStorage.setItem('authToken', res.data.token); //guardamos el token en localstorage
    store.dispatch({ //this.userService.setUser(res.user)
        type: 'LOGIN',
        payload: res.data.user //La respuesta del backend me devuelve user y lo guardo en el payload
    });
}