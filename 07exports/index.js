//Render o Motor de Vistas más dínamico:
//Importación de librerías o mudulos
var http = require("http");//Servir aplicaciones web usando el protocolo http
var fs = require("fs");////Módulo que maneja el sistema de archivos de la computadora
var parser = require("./form_params.js");//requerimos un modulo en nuestra carpeta

var para = parser.parse;//Importamos el método parse del objeto parser

//Método http
http.createServer(function(req, res){//Método http para crear un servidor, se queda esperando request del navegador para devolver response del servidor
    
    //objeto de la request:
    console.log("\n\n\n\n___________req:_________");
    //console.log(req);
    console.log("===============\n\n\n\n");

    //Método que indica el número de incidencias que encontro de "x":
    if(req.url.indexOf("favicon.ico") > 0){
        console.log("interrumpiendo el proceso...");
        return;}//Si encuentra alguna incidencia se interrumpe el proceso
    console.log("\n\n\n*****continuo con el proceso");

    //Método fs
    //aquí debe leer el archivo cadavez que se hace una petición, si index.html cambia ya no hay que reiniciar el servidor
    fs.readFile("./index.html",function(err,html){//Callback que recibe 2 parametros: err y data
        console.log("html1=",html);//Mensaje por consola del servidor
        
        var html_String = html.toString();//Método para convertir a una cadena
        console.log("html2_String=",html_String);//Mensaje por consola del servidor
        
        //Expresión regular que busca en el HTML dondo haya {x}
        var variables = html_String.match(/[^\{\}]+(?=\})/g);//Método string que permite pasarle expresiones regulares y regresa un arreglo con todas las incidencias encontradas, aquí el patrón lo que busca es valores entre {}
        console.log("variables3=",variables);//Mensaje por consola del servidor

        var parametros = para(req);//Utilizamos nuestro módulo, se le pasa el objeto req de la solicitud

        //variables ['nombre']
        for (var i = variables.length - 1; i >=0; i--) {
            
            //Lo ejecutamos como código de JS para obtener el valor de dicha variable:
            var variable = variables[i];
            console.log("variable=",variable);//Mensaje por consola del servidor
                
            console.log("html_String5=",html_String);//Mensaje por consola del servidor
            //Reemplazar el contenido con llaves {x} por su valor correspondiente:
            html_String = html_String.replace("{"+variable+"}",parametros[variable]);
            console.log("html_String6=",html_String);//Mensaje por consola del servidor
        };
        
        res.writeHead(200,{"Content-Type":"text/html"});//Método para cabeceras de repuesta
        
        //Mandamos el contenido:
        res.write(html_String);//Método para escribir archivos al navegador
        console.log("Recibimos una petición la atendemos de forma asíncrona");//Mensaje por consola del servidor, se queda esperando, debe responder algo al navegador o por lo menos debe cerrar la conexión
        res.end('Fin de la conexíon asíncrona');//Imprime en el navegador y cierra la conexión
    });//Método para leer archivos de forma asíncrona
}).listen(3000);

//Run:node index.js /node index
//Desde una nueva terminal o consola se puede ver el header de la respuesta con:$ curl -I localhost:3000 


/*

___________req:_________
===============




*****continuo con el proceso
html1= <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0a 3c 68 65 61 64 3e 0a 20 20 20 20 3c 6d 65 74 61 20 ... 282 more bytes>
html2_String= <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola {nombre} de forma asíncrona</h1>
    <form action="/">
        <input name="nombre" required type="text">
    </form>
</body>
</html>
parametros= {}
variables3= [ 'nombre' ]
arreglo_parametros [ 'nombre=Uriel' ]
parametro= nombre=Uriel
param_data= [ 'nombre', 'Uriel' ]
parametros= { nombre: [ 'Uriel' ] }
variable= nombre
html_String5= <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola {nombre} de forma asíncrona</h1>
    <form action="/">
        <input name="nombre" required type="text">
    </form>
</body>
</html>
html_String6= <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola Uriel de forma asíncrona</h1>
    <form action="/">
        <input name="nombre" required type="text">
    </form>
</body>
</html>
Recibimos una petición la atendemos de forma asíncrona


___________req:_________
===============


interrumpiendo el proceso...
*/