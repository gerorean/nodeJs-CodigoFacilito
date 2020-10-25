//Importación de librerías o mudulos
var http = require("http");//Servir aplicaciones web usando el protocolo http
var fs = require("fs");////Módulo que maneja el sistema de archivos de la computadora

//Método http
http.createServer(function(req, res){//Método http para crear un servidor
    //Método fs
    //aquí debe leer el archivo cadavez que se hace una petición, si index.html cambia ya no hay que reiniciar el servidor
    fs.readFile("./index.html",function(err,html){//Callback que recibe 2 parametros: err y data
        res.writeHead(200,{"Content-Type":"application/json"});//Método para cabeceras de repuesta
        //res.writeHead(200,{"Content-Type":"text/html"});//Método para cabeceras de repuesta
        res.write(html);//Método para escribir archivos al navegador
        res.write(JSON.stringify({nombre:"Rodrigo", username:"Reyes"}));//Envía un JSON como respuesta
        console.log("Recibimos una petición la atendemos de forma asíncrona sin el .end");//Mensaje por consola del servidor, se queda esperando, debe responder algo al navegador o por lo menos debe cerrar la conexión
        /*var i = 0;
        while (i<200000){
            i++;
            res.write(i+", ");
            console.log(i+"");
        };
        //Si no se manda .end se pueden seguir envíando repuestas:
        //res.end('Fin de la conexíon asíncrona');//Imprime en el navegador y cierra la conexión*/
        res.end('Fin de la conexíon asíncrona');//Imprime en el navegador y cierra la conexión
    });//Método para leer archivos de forma asíncrona
}).listen(3000);

//Run:node index.js /node index
//Desde una nueva terminal o consola se puede ver el header de la respuesta con:$ curl -I localhost:3000 