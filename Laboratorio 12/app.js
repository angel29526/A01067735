console.log("hola, mundo!");
console.log("Ya no es necesario reiniciar el 'servidor', ya era hora.");

//JSON: Java Script Object Notation
//{nombre_atributo: valor}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

//Motor de vista
app.set('view engine', 'ejs');
app.set('views', 'views');

const misRutas = require("./routes/clases");

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

//Para acceder a los recursos de la carpeta public.
app.use(express.static(path.join(__dirname, 'public')));

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get("/lab",(request, response, next)=>{
    response.sendFile(path.join(__dirname, 'views', 'Laboratorio 6.html'));
});

app.use("/", misRutas);
            
app.listen(3000);