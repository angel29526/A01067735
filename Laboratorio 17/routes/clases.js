const express = require('express');

const router = express.Router();

const path = require("path");

const clasesController = require('../controllers/clases_controller');

router.get('/nueva-clase', clasesController.getNuevaClase);

router.post("/nueva-clase", clasesController.postNuevaClase);

router.get('/:clase_id', clasesController.getClase);

router.get('/', clasesController.get);

//404
/*
router.get('*', (request, response, next) => {
    response.statusCode = 404;
    response.render("<h1>Nada que ver por aquí, fuera.</h1>"); 
});
*/
module.exports = router;