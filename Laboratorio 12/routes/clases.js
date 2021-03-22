const clases = ["Saber", "Archer", "Lancer"];

const path = require("path");


const express = require('express');

const router = express.Router();

router.get('/clases/nueva-clase',(request, response, next)=>{
    response.render('nuevaClase', {listaClases: clases});
});

router.post("/clases/nueva-clase",(request, response, next)=>{
    console.log(request.body.nombre);
    clases.push(request.body.nombre);
    response.redirect("/clases");
    console.log(clases);
});

router.get('/clases',(request, response, next) => {
    response.render('clases', {listaClases: clases});
});

router.get('/',(request, response, next)=>{
    response.send("<h1>Página principal, buenas</h1><p>Laboratorio 11, bastante interesante express, todo decente, ya era hora.</p>")
});

//404
router.get('*', (request, response, next) => {
    response.statusCode = 404;
    response.render("<h1>Nada que ver por aquí, fuera.</h1>"); 
});

module.exports = router;