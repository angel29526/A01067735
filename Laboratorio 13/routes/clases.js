const express = require('express');

const router = express.Router();

const path = require("path");

const clasesController = require('../controllers/clases_controller');

router.get('/clases/nueva-clase', clasesController.getNuevaClase);

router.post("/clases/nueva-clase", clasesController.postNuevaClase);

router.get('/clases', clasesController.get);

router.get('/',(request, response, next)=>{
    response.send("<h1>Página principal, buenas</h1><p>Laboratorio 11, bastante interesante express, todo decente, ya era hora.</p>")
});

//404
router.get('*', (request, response, next) => {
    response.statusCode = 404;
    response.render("<h1>Nada que ver por aquí, fuera.</h1>"); 
});

module.exports = router;