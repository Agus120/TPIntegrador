const fs = require('fs');

const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const sucursalesController ={

    index:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'});

        res.write('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n');

        res.write('LISTA DE SUCURSALES\n');

        res.write('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n');

        concesionarias.forEach(sucursal => {

            res.write('----------------------------------------------------------------------------------------------------\n');

            res.write('Sucursal: ' + sucursal.sucursal + '\n');

            res.write('Direccion: ' + sucursal.direccion + '\n');

            res.write('Telefono: ' + sucursal.telefono + '\n');

            res.write('----------------------------------------------------------------------------------------------------\n\n');

        });

        res.end();

    },

    sucursal:function(req, res){

        res.set({'content-type':'text/plain;charset=utf-8'});

    let filtroSucursal = req.params.sucursales;

        res.write('________________________________________\n\n');

        res.write('Estas viendo la sucursal de ' + filtroSucursal + '\n');

        res.write('________________________________________\n\n');

    concesionarias.forEach(function(sucursal){

        if(sucursal.sucursal == filtroSucursal){

            res.write('Sucursal: ' + sucursal.sucursal + '\n');

            res.write('Direccion: ' + sucursal.direccion + '\n');

            res.write('Telefono: ' + sucursal.telefono + '\n\n');

            res.write('Estos son los autos de la sucursal de ' + filtroSucursal+":\n\n");

            res.write('Cantidad de autos: '+ sucursal.autos.length+ '\n\n');

            sucursal.autos.forEach(function(datos){

                res.write('-------------------------\n');

                res.write('MARCA: ' + datos.marca + '\n');

                res.write('MODELO: ' + datos.modelo + '\n');

                res.write('AÑO: ' + datos.anio + '\n');

                res.write('-------------------------\n');

            });

        res.end();

        };

    });

    res.end();

    },

};

module.exports = sucursalesController;