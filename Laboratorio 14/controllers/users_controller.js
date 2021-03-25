exports.getLogin = (request, response, next) =>{
    response.render("login",{
        titulo: "Inicia sesión"
    });
};

exports.postLogin = (request, response, next) =>{
    
};