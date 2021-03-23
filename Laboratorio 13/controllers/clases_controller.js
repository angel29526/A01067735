const clases = ["Saber", "Archer", "Lancer"];

exports.get = (request, response, next) => {
    response.render('clases', {listaClases: clases});
};