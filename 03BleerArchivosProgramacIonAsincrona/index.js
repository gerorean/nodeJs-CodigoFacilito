//Importación de librerías o mudulos -require()
var http = require("http");//Servir aplicaciones web usando el protocolo -http
var fs = require("fs");////Módulo que maneja el sistema de archivos de la computadora

//Método fs
fs.readFile("./index.html",cb);//Método para leer archivos de forma asíncrona

function cb(err,html){//Callback que recibe 2 parametros: err y data
    http.createServer(function(req, res){//Método http para crear un servidor
        res.write(html);//Método para escribir archivos al navegador
        console.log("Recibimos una petición la atendemos de forma asíncrona");//Mensaje por consola del servidor, se queda esperando, debe responder algo al navegador o por lo menos debe cerrar la conexión
        res.end('Fin de la conexíon asíncrona');//Imprime en el navegador y cierra la conexión
    }).listen(3000);
}

//Run:node index.js /node index