//npm init
//npm install express --save
//npm install jade --save
//https://getbootstrap.com/

//librerias:
var express = require ("express");

//Importamos objetos:
var app = express();


//Middleware:
//Ej ruta midominio.com/estatico/:
app.use("/estatico",express.static('public'));//Sirve archivos estaticos, en la ruta especifica
app.use("/estatico",express.static('assets'));//Sirve archivos estaticos, en la ruta especifica

//Configuración:
app.set("view engine","jade");//Motor de vistas

//Métodos HTTP: ARQUITECTURA REST(GET,POST,PUT,DELETE)
app.get("/",function(req,res){
    //Respuesta
    console.log("solicitud / enviada");
    //res.send("Hola mundo");
    //res.render("index",{hola:"Hola Rodrigo"});//Renderiza el archivo jade, como segundo parametro podemos enviarle variables con un hash o JSON de opciones
    res.render("index");//Renderiza el archivo jade
})

app.get("/login",function(req,res){
    //Respuesta
    console.log("solicitud /login enviada");
    res.render("login");//Renderiza el archivo jade
})
/*
app.get("/login/:nombre",function(req,res){
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
*/
app.listen(3000);//Escucha por el puerto