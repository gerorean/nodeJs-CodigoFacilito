//Importación de librerías o mudulos
var http = require("http");//Servir aplicaciones web usando el protocolo http
var fs = require("fs");////Módulo que maneja el sistema de archivos de la computadora

//Método http
http.createServer(function(req, res){//Método http para crear un servidor
    //Método fs
    //aquí debe leer el archivo cadavez que se hace una petición, si index.html cambia ya no hay que reiniciar el servidor
    fs.readFile("./index.html",function(err,html){//Callback que recibe 2 parametros: err y data
        res.write(html);//Método para escribir archivos al navegador
        console.log("Recibimos una petición la atendemos de forma asíncrona");//Mensaje por consola del servidor, se queda esperando, debe responder algo al navegador o por lo menos debe cerrar la conexión
        res.end('Fin de la conexíon asíncrona');//Imprime en el navegador y cierra la conexión
    });//Método para leer archivos de forma asíncrona
}).listen(3000);

//Run:node index.js /node index