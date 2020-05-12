import React from "react";
import "./menu.css";
import Axios from "axios";
import InputSearchAnt from '../../containers/InputSearchAnt/InputSearchAnt';
import { NavLink, useHistory, Link } from 'react-router-dom';
import { notification } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from "react-redux";
import { login } from "../../redux/actions";

const Menu = (props) => {
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [select, setSelect] = React.useState('');

  const cambioSelect = (event) => {
    setSelect(event.target.value);
  };
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Registro = (event) => {
    event.preventDefault();
    const user = {
      nombre: event.target.nombre.value,
      ciudad: select,
      email: event.target.email.value,
      password: event.target.password.value
    }

    Axios.post('http://localhost:3000/usuario/registrar', user)
      .then(res => {
        notification.success({ message: 'Usuario creado con éxito' });
        document.querySelector('.modal').style.display = 'none !important';
        setTimeout(() => {
          history.go('/')
        }, 2000)
      })
      .catch(console.error)
  }
  const Login = (event) => {
    event.preventDefault();
    console.log('LOGIN')
    const user = {
      email: event.target.Lemail.value,
      password: event.target.Lpassword.value
    }
    login(user)
      .then(res => {
        notification.success({ message: 'Usuario logueado con éxito' });

        setTimeout(() => {
          history.push('/')
        }, 2000)
        console.log(user)
      })
      .catch(console.error)
  }
  return (
    <div className="container-fluid">
      <div id="nav" className="row d-flex justify-content-between align-items-center menu">
        <p className="logo">BICISHOP</p>
        <ul className="d-flex flex-row">
          <NavLink to='/' exact>
            <li>Inicio</li>
          </NavLink>
          <NavLink to="/tienda" exact>
            <li>Tienda</li>
          </NavLink>
          <NavLink to="/blog">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contacto">
            <li>Contacto</li>
          </NavLink>
        </ul>
        <ul className="d-flex flex-row iconos">
          <a data-toggle="modal" data-target="#Buscador">
            <li>
              <i className="fas fa-search"></i>
            </li>
          </a>
          <li>
            {!props.user ?
              <a data-toggle="modal" data-target="#ModalRegistro">
                <i className="far fa-user"></i>
              </a>
              :
              <i className="far fa-user"></i>
            }
          </li>
          <Link to={'/carrito'}>
            <li>
              <i className="fas fa-shopping-cart"></i>
            </li>
          </Link>
        </ul>
      </div>
      {/*  MODAL REGISTRO */}
      <div className="modal fade" id="ModalRegistro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Registro</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={Registro} className="d-flex flex-column">
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Nombre de usuario"
                  name="nombre" required
                />
                <FormControl className={classes.formControl}>
                  <InputLabel id="select-ciudad">Ciudad</InputLabel>
                  <Select
                    labelId="Ciudad"
                    id="select-Ciudad"
                    value={select}
                    onChange={cambioSelect}
                  >
                    <MenuItem value="Valencia">Valencia</MenuItem>
                    <MenuItem value='Madrid'>Madrid</MenuItem>
                    <MenuItem value='Barcelona'>Barcelona</MenuItem>
                    <MenuItem value="Zaragoza">Zaragoza</MenuItem>
                    <MenuItem value="Sevilla">Sevilla</MenuItem>
                    <MenuItem value="Murcia">Murcia</MenuItem>
                    <MenuItem value="Alicante">Alicante</MenuItem>
                    <MenuItem value="Castellon">Castellon</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Email" name="email" type="email" required title="Introduce un email valido"
                />
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password} name="password"
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button type="submit" variant="contained" className="colorBoton">Registrarse</Button>
              </form>
            </div>
            <div className="modal-footer">
              <Button color="secondary" data-dismiss="modal">Cerrar</Button>
              <Button data-toggle="modal" data-target="#ModalLogin" data-dismiss="modal">Login</Button>            </div>
          </div>
        </div>
      </div>
      {/* //MODAL LOGIN */}
      {!props.user ?
        <div className="modal fade" id="ModalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">LOGIN</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={Login} className="d-flex flex-column justify-content-center">
                  <TextField
                    className={classes.margin}
                    id="input-with-icon-textfield"
                    label="Email"
                    name="Lemail"
                  />
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password} name="Lpassword"
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Button type="submit" variant="contained" className="colorBoton">LogIn</Button>
                </form>
              </div>
              <div className="modal-footer">
                <Button color="secondary" data-dismiss="modal">Cerrar</Button>
                <Button data-toggle="modal" data-target="#ModalRegistro" data-dismiss="modal">Registrarse</Button>
              </div>
            </div>
          </div>
        </div>
        : 
        <span></span>}
      {/* MODAL BUSCADOR */}
      <div class="modal fade" id="Buscador" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <InputSearchAnt />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(Menu);