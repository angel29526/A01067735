const clases = ["Saber", "Archer", "Lancer"];

const requestHandler = (request, response) =>{
    response.statusCode = 200;
    console.log("Buenas desde el servidor");
    console.log(request.url);

    if (request.url === "/clases"){
        response.setHeader("Content-Type","text/html; charset=utf-8");
        response.write("<html>");
        response.write("<head><title>Gilgamesh</title></head>")
        response.write("<body><h1>Clases, Nice</h1></body>")
        
        if(clases.length == 0){
            response.write("<h2>No hay clases, la guerra del Santo Grial terminó.</h2>")
        } 
        else{
            
        response.write("<ul>");
        for (let clase of clases){
            response.write("<li>");
            response.write(clase);
            response.write("</li>");
        }
        response.write("</ul>");
    }   
    response.write("</html>");
    response.end();
    

    } 
    //Nuevo Personaje
    else if (request.url === "/nueva-clase" && request.method === "GET"){
        response.setHeader("Content-Type","text/html; charset=utf-8");
        response.write("<html>");
        response.write("<head><title>Diarmuid Ua Duibhne</title></head>");
        response.write("<body><h1>Agregar nueva clase</h1>");
        
        response.write("<form action='nueva-clase' method='POST'><input type='text' name='nombre'><input type='submit' value='Submit'></form>");

        response.write("</body>");
        response.write("</html>");
        response.end();
    }

    else if (request.url === "/nueva-clase" && request.method === "POST"){
        const datos = [];
        request.on("data",(dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on("end",()=>{
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nueva_clase = datos_completos.split("=")[1];
            clases.push(nueva_clase);
            console.log(nueva_clase);
            console.log(clases);
            response.statusCode = 302;
            response.setHeader("Location","/clases");
            return response.end();
        });
    }

    else if (request.url === "/"){
        response.setHeader("Content-Type","text/html; charset=utf-8");
        response.write("<html>")
        response.write("<head><title>Main</title></head>")
        response.write("<body>")
        response.write("<h1>Buenas, Lab 10</h1>");
    
        response.write("<p>Buenas, todo bien, todo correcto, incluso hay acentos(á), nice.</p>");
    
        response.write("</body>");
        response.write("</html>");
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader("Content-Type","text/html; charset=utf-8");
        response.write("<html>");
        response.write("<head><title>Page Not Found</title></head>");
        response.write("<body><h1>Page Not Found, Nada que hacer.</h1></body>");

        response.write("</html>")
        response.end();
    }
}

module.exports = requestHandler;