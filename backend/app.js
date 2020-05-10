var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conexion exitosa')
});

const UsuarioRouter = require('./routes/usuario');
const bicisRouter = require('./routes/bicis');
const pedidosRouter = require('./routes/pedidos');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/usuario', UsuarioRouter);
app.use('/bicicletas', bicisRouter);
app.use('/pedidos', pedidosRouter);

module.exports = app;
