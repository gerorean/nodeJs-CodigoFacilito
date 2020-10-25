/*TIPOS DE DATOS EN UN SCHEMA:
    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    ObjectId
    Array
*/

//Colección de Usuarios:

//Solicitud de librerias:
var mongoose = require('mongoose');

//Objetos:
var Schema = mongoose.Schema;//Atributo que mapea, retorna un objeto que es el schema, constructor para generar schemas

//Configuración:
mongoose.connect("mongodb://localhost/fotos");//Conexión: Espeficifa el servidor nos vamos a conectar / y luego el nombre de nuestra base de datos


//INICIO DE LA CONEXIÓN CON LA BASE DE DATOS: - - - - PARALELO: Colecciones => tablas  COMO   Documentos => filas
//1ro-Schemas => Un esquema corresponde a una colección y definen la forma que van a tener nuestros documentos en la colección de mongo, crean objetos que mongoose entiende con un esquema, son como en la estructura de la tabla
//Todos los esquemas pertenecen a una colección en la base de datos en mongodb
var user_schema = new Schema({
    //estructura JSON que define el documento, pasamos los atributos como claves para cada valor del JSON y como valor pasamos el tipo de dato, ejemplo:
    name: String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_of_birth: Date
});

//2do-Modelos => Son instancias en mongoose que permiten llamar métodos y realizar acciones sobre la base de datos, establecen la conexión con la base de datos, <Objetos-métodos> se les pasa el esquema que quiero que tenga en la tabla a la que va a mapear:
//Model es el constructor que genera los modelos; parametros=>(nombreDelModelo***,esquema), cuando mongoose crea el modelo, el modelo mapea a una colección en la base de datos, equivale como a una tabla
//Pero el nombre que busca de esa colección y le asigna a esa colección en caso de que no exista es el plural de la primera palabra, o parametro ***s ejemplo:
var User = mongoose.model("User",user_schema);
//Colleccion Users => ***s


//Exportamos el modelo
module.exports.User = User;