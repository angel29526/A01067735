const clases = ["Saber", "Archer", "Lancer"];

const path = require("path");

const { request, response } = require('express');
const express = require('express');

const router = express.Router();

router.get("/clases/nueva-clase",(request, response, next)=>{
    response.send("<h1>Nueva clase</h1><body><h1>Agregar nueva clase</h1><form action='nueva-clase' method='POST'><input type='text' name='nombre'><input type='submit' value='Submit'></form>");
});

router.post("/clases/nueva-clase",(request, response, next)=>{
    console.log(request.body.nombre);
    clases.push(request.body.nombre);
    response.redirect("/clases");
    console.log(clases);
});

router.use('/clases',(request, response, next) => {
    let htmlClases = "<h1>Clases</h1><h2><ul>";
    for (let clase of clases){
        htmlClases += "<li>" + clase + "</li>";
    }
    htmlClases += "</h2></ul>";
    response.send(htmlClases); 
});

router.get('/',(request, response, next)=>{
    response.send("<h1>Página principal, buenas</h1><p>Laboratorio 11, bastante interesante express, todo decente, ya era hora.</p>")
});

//404
router.get('*', (request, response, next) => {
    response.statusCode = 404;
    response.send("<h1>Nada que ver por aquí, fuera.</h1>"); 
});

module.exports = router;