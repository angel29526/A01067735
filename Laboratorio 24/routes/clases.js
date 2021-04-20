const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require("path");

const clasesController = require('../controllers/clases_controller');

router.get('/nueva-clase', isAuth, clasesController.getNuevaClase);

router.post("/nueva-clase", isAuth, clasesController.postNuevaClase);

router.get('/:clase_id', isAuth ,clasesController.getClase);

router.post('/buscar', isAuth, clasesController.postBuscar)

router.get('/', isAuth, clasesController.get);

//404
/*
router.get('*', (request, response, next) => {
    response.statusCode = 404;
    response.render("<h1>Nada que ver por aquí, fuera.</h1>"); 
});
*/
module.exports = router;