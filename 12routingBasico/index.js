//npm init
//npm install express --save
//npm install jade --save

//librerias:
var express = require ("express");

//Importamos objetos:
var app = express();

//Configuración:
app.set("view engine","jade");//Motor de vistas

//Métodos HTTP: ARQUITECTURA REST(GET,POST,PUT,DELETE)
app.get("/",function(req,res){
    //Respuesta
    console.log("solicitud enviada");
    //res.send("Hola mundo");
    //res.render("index",{hola:"Hola Rodrigo"});//Renderiza el archivo jade, como segundo parametro podemos enviarle variables con un hash o JSON de opciones
    res.render("index");//Renderiza el archivo jade
})

app.get("/algo",function(req,res){
    //Respuesta
    console.log("solicitud enviada");
    res.render("form");//Renderiza el archivo jade
})

app.get("/algo/:nombre",function(req,res){
    //Respuesta
    console.log("solicitud algo/: enviada");
    console.log(req.params.nombre);//Muestra por consola el id enviado en la petición
    res.render("form",{nombre:req.params.nombre});//Renderiza el archivo jade
})

app.post("/",function(req,res){
    //Respuesta
    console.log("solicitud enviada");
    //res.send("Hola mundo");
    //res.render("index",{hola:"Hola Rodrigo"});//Renderiza el archivo jade, como segundo parametro podemos enviarle variables con un hash o JSON de opciones
    res.render("form");//Renderiza el archivo jade
})

app.listen(3000);//Escucha por el puerto