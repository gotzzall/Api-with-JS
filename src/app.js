const express = require('express');
const config = require('./config');

const app = express();
const clientes = require('./modules/client/rutas');

// Configuracion
app.set('port', config.app.port);

// Rutas
app.use('/api/clientes', clientes);

module.exports = app;