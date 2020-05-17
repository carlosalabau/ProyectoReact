import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { notification } from 'antd';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { login } from "../../redux/actions";
import axios from 'axios';

const ModalLogin = (props) => {
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
    const [mostrarModal, setMostrarModal] = useState(true)
    const Login = (event) => {
        event.preventDefault();
        const user = {
            email: event.target.Lemail.value,
            password: event.target.Lpassword.value
        }
        axios.get('http://localhost:3000/usuario')
        .then(res=>{

        })
        login(user)
            .then(res => {
                notification.success({ message: 'Usuario logueado con éxito' });
                setTimeout(() => {
                    setMostrarModal(false)
                    history.push('/')
                }, 2000)
            })
            .catch(console.error)
    }
    return (
        <React.Fragment>
            {mostrarModal &&
                <div className="modal fade" id="Login" tabindex="-1" role="dialog" aria-labelledby="ModalLogin" aria-hidden="true">
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
            }
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(ModalLogin);