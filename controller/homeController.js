const fs = require('fs');

const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const home ={

    index:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'});

        res.write('_ _________________________________________________________________________________________________ _\n\n');

        res.write('Bienvenido a nuestra pagina web, en la que vas a poder encontrar una gran variedad de concesionarias \n');

        res.write('_ _________________________________________________________________________________________________ _\n\n');

        res.write("Estas son nuestras concesionaras: \n\n");

        concesionarias.forEach(sucursal => {

            res.write('Sucursal: ' + sucursal.sucursal + '\n');

        });

        res.end();

    },

};

module.exports = home;
