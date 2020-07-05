const express = require('express');

const app = express();


const routeHome = require('./routes/home');

const routeAutos = require('./routes/autos');

const routeMarcas = require('./routes/marcas');

const routeSucursales = require('./routes/sucursales');


app.listen(3030, ()=>console.log('El servidor esta funcionando en el puerto 3030'));


app.use('/', routeHome);

app.use('/autos', routeAutos);

app.use('/marcas', routeMarcas);

app.use('/sucursales', routeSucursales);


