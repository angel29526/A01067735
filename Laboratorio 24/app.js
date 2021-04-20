console.log("hola, mundo!");
console.log("Ya no es necesario reiniciar el 'servidor', ya era hora.");

//JSON: Java Script Object Notation
//{nombre_atributo: valor}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

//Cookie-Parser
const cookieParser = require("cookie-parser");
const session = require('express-session');

//csurf
const csrf = require('csurf');
const csrfProtection = csrf();

//Motor de vista EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

const misRutas = require("./routes/clases");
const rutasUsers = require("./routes/users");
const { response } = require('express');



//Middleware
//Para acceder a los datos de las formas
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Para acceder a los valores de las cookies
app.use(cookieParser());
//Para trabajar con sesiones
app.use(session({
    secret: 'delfincitobebe', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


//Para acceder a los recursos de la carpeta public.
app.use(express.static(path.join(__dirname, '/public')));

app.use(csrfProtection);

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
}); 

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get("/lab",(request, response, next)=>{
    response.sendFile(path.join(__dirname, 'views', 'Laboratorio 6.html'));
});

app.use("/users/", rutasUsers);

app.use("/clases", misRutas);
            
app.listen(3000);