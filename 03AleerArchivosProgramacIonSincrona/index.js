//Importación de librerías o mudulos -require()
var http = require("http");//Servir aplicaciones web usando el protocolo -http
var fs = require("fs");////Módulo que maneja el sistema de archivos de la computadora

//Método fs
var html = fs.readFileSync("./index.html");//Método para leer archivos síncronos

http.createServer(function(req, res){//Método http para crear un servidor
    res.write(html);//Método para escribir archivos al navegador
    console.log("Recibimos una petición síncrona");//Mensaje por consola del servidor, se queda esperando, debe responder algo al navegador o por lo menos debe cerrar la conexión
    res.end('Fin de la conexíon');//Imprime en el navegador y cierra la conexión
}).listen(3000);

//Run:node index.js /node index