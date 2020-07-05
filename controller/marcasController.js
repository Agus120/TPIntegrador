const fs = require('fs');

const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const marcasController ={

    index:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'});

        res.write('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n');

        res.write("Todas las marcas: \n");

        res.write('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n');

        let mar =[];

        concesionarias.forEach(m=>{

            m.autos.forEach(m=>{

                mar.push(m.marca);

            });

        });

         mar = mar.filter((a, index) =>mar.indexOf(a) === index);

        mar.forEach(m=>{

            res.write("-"+m+"\n");

        });

       res.end();

    },

    filtroMarca:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'});

        let idmarca = req.params.idmarca;

        concesionarias.forEach(function(sucursal){

            sucursal.autos.forEach(function(auto){

                if(auto.marca == idmarca){

                    res.write('-------------------------------\n');

                    res.write('MARCA: ' + auto.marca + '\n');
                    
                    res.write('MODELO: ' + auto.modelo + '\n');

                    res.write('AÑO: ' + auto.anio + '\n');

                    res.write('-------------------------------\n\n');

                }else {

                    return "Lo siento, no encontramos resultados para " + idmarca;;

                };

            });

        });
        
        res.end();

    },

};


module.exports = marcasController;