const fs = require('fs');

const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const autosController ={

    index:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'});

        res.write('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n');

        res.write('Estos son TODOS los autos\n');

        res.write('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n');

        concesionarias.forEach(function(sucursal){

            sucursal.autos.forEach(function(auto){

                res.write('_______________________________\n');

                res.write('MARCA: ' + auto.marca + '\n');

                res.write('MODELO: ' + auto.modelo + '\n');

                res.write('ANIO: ' + auto.anio + '\n');

                res.write('COLOR: ' + auto.color + '\n');

                res.write('_______________________________\n');

            });

        });

        res.end();
    },

    filtroAutos:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'});

        let idMarca = req.params.idmarca;

        concesionarias.forEach(function(sucursal){

            sucursal.autos.forEach(function(auto){

                if(auto.marca == idMarca){

                    res.write('-------------------------------\n');

                    res.write('MARCA: ' + auto.marca + '\n');

                    res.write('MODELO: ' + auto.modelo + '\n');

                    res.write('ANIO: ' + auto.anio + '\n');

                    res.write('COLOR: ' + auto.color + '\n');

                    res.write('-------------------------------\n\n');

                }else {

                    return "Lo siento, no encontramos resultados para " + idmarca;

                };

            });

        });

        res.end();

    },

    datoMarca:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'});

        let idMarca = req.params.idmarca;

        let idDato = req.params.dato;
        
        concesionarias.forEach(function(sucursal){

            let color = sucursal.autos.filter(function(auto){

                return (auto.color == idDato || auto.anio == idDato) && auto.marca == idMarca;

            })

            color.forEach(function(colorcito){

                res.write('---------------------------\n\n');

                res.write('MARCA: '+ colorcito.marca+ '\n');

                res.write('MODELO: '+ colorcito.modelo+ '\n');

                res.write('AÑO: '+ colorcito.anio+ '\n');

                res.write('COLOR: '+ colorcito.color+'\n');

                res.write('---------------------------\n\n');

                if(colorcito !== color){

                    return "Lo siento, no encontramos resultados para " + colorcito;

                };

            });

        });

        res.end();

    }, 

};

module.exports = autosController;