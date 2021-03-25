const { fetchAll } = require('../models/clase');
const Clase = require('../models/clase');

exports.getNuevaClase = (request, response, next)=>{
    response.render('nuevaClase', {
        titulo: "Nueva Clase"
    });
};

exports.postNuevaClase = (request, response, next)=>{
    console.log(request.body.nombre_clase);
    const nueva_clase = new Clase(request.body.nombre_clase, request.body.imagen_clase);
    nueva_clase.save();
    console.log(fetchAll());
    response.redirect("/clases");
};

exports.get = (request, response, next) => {
    const clases = Clase.fetchAll();
    response.render('clases', {
        listaClases: clases,
        titulo: 'Clases'
    });
};

/*
¿Qué beneficios encuentras en el estilo MVC?
Todos, permitirá realizar cambios de forma maravillosa dado que estamos haciendo uso de código lasaña. Nice.

¿Encuentras alguna desventaja en el estilo arquitectónico MVC?
Probablemente sea el hecho de que para este punto ya se están creando bastantes archivos que revisar, justo ahora me encontré tratando de resolver un error a través de varios archivos.
*/