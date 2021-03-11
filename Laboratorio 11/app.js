console.log("hola, mundo!");
console.log("Ya no es necesario reiniciar el 'servidor', ya era hora.");

//JSON: Java Script Object Notation
//{nombre_atributo: valor}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const misRutas = require("./routes/clases");

//Middleware
app.use(bodyParser.urlencoded({extended: false}));


app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use("/", misRutas);
            
app.listen(3000);