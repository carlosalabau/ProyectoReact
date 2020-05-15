import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";
import { notification } from 'antd';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';

const ModalRegistro = () => {
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
            .then(() => {
                notification.success({ message: 'Usuario creado con éxito' });
                setTimeout(() => {
                    history.push('/')
                }, 2000)
            })
            .catch(console.error)
    }

    return (
        <div className="modal fade" id="ModalRegistro" tabindex="-1" role="dialog" aria-hidden="true">
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
                        <Button data-toggle="modal" data-target="#Login" data-dismiss="modal">Login</Button>            </div>
                </div>
            </div>
        </div>
    )
}
export default ModalRegistro;