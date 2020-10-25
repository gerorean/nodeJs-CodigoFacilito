
function parse(req){       

    var arreglo_parametros = [];//Arreglo
    var parametros = {};//Objeto o hash de parametros tipo JSON
    console.log("parametros=",parametros);

    //tenemos esta url o camino (path) => /?nombre=Rodrigo que va despues del dominio => localhost:3000
    //Si nos estan enviando parametros ?
    if(req.url.indexOf("?")>0){
        var url_data = req.url.split("?");//Parte la cadena en donde esta el parametro ? y lo devuelve en un arreglo
        // /?nombre=Rodrigo => ['\','nombre=Rodrigo']
        
        //Si nos vienen varios parametros, estos van unidos con &
        // /?nombre=Rodrigo&nombre2=Reyes => ['nombre=Rodrigo','nombre2=Reyes']
        var arreglo_parametros = url_data[1].split("&");//Parte la cadena en donde hay parametros unidos con & y los devuelve en un arreglo
    };

    console.log("arreglo_parametros",arreglo_parametros);
    for (var i = 0; i < arreglo_parametros.length; i++) {//por cada elemento del arreglo, por cada parametro:
                     
        var parametro = arreglo_parametros[i];
        console.log('parametro=',parametro);
        // 'nombre=Rodrigo'
        var param_data = parametro.split("=");
        console.log('param_data=',param_data);
        // ['nombre','Rodrigo']
        //asigna una pareja dentro del hash
        parametros[param_data[0]] = [param_data[1]];
        console.log('parametros=',parametros);
        // {nombre:Rodrigo}
    }

    console.log("*** parametros=",parametros);
    return parametros;
}

//Exportamos el módulo:
module.exports.parse = parse;