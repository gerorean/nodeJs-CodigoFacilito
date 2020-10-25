//Importación de librerías o mudulos -require()
var http = require("http");//Servir aplicaciones web usando el protocolo -http

//function(req,res) recibe dos parametros, un objeto con informacíon de la solicitud que hace el usuario (request), y otro objeto que nos permite responder al usuario (response)
var manejador = function(req, res){//Se ejecuta cada vez que el navegador hace una petición al servidor con node
    console.log("Recibimos una petición");//Mensaje por consola del servidor, se queda esperando, debe responder algo al navegador o por lo menos debe cerrar la conexión
    //console.log("_req=",req,", _res=",res);//Muestra los objetos
    res.end('Hello, World!');//Imprime en el navegador y cierra la conexión
};

//métodos http
var servidor = http.createServer(manejador);//Método para crear un servidor
servidor.listen(3000);//Método para escuchar por el puerto

//Run:node index.js /node index