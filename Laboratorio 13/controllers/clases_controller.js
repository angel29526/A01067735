const clases = ["Saber", "Archer", "Lancer"];

exports.getNuevaClase = (request, response, next)=>{
    response.render('nuevaClase', {listaClases: clases});
};

exports.postNuevaClase = (request, response, next)=>{
    console.log(request.body.nombre);
    clases.push(request.body.nombre);
    response.redirect("/clases");
    console.log(clases);
};

exports.get = (request, response, next) => {
    response.render('clases', {listaClases: clases});
};

