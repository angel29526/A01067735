const http = require("http");

const server = http.createServer((request, response) =>{
    response.statusCode = 200;
    console.log("Buenas desde el servidor");
    response.setHeader("Content-Type","text/html; charset=utf-8");
    response.write("<html>")
    response.write("<body>")
    response.write("<h1>Buenas, Lab 8</h1>");

    response.write("<p>Buenas, todo bien, todo correcto, incluso hay acentos(á), nice.</p>");


    response.write("</body>")
    response.write("</html>")
    response.end(promedio_de_array(), escribirEnArchivoDeTexto());
});

server.listen(3000);

function promedio_de_array(){ //Buenas, crea un array de 0-10 números con valores que van también de 0-10, nice.
    let inputArray = [];
    let averageOfArray = 0;
    let randomNumber = Math.floor(Math.random() * 11);
    for(i=0;i<= randomNumber;i++){
        let randomNumber = Math.floor(Math.random() * 11);
        inputArray.push(randomNumber); //Ya que al parecer inputArray[i] = randomNumber; no está tan bien.
    }

    let arrayLenght = inputArray.length;

    for(i=0;i<arrayLenght;i++){ //Nota para mí mismo, <= arrayLenght dará NaN dado que estoy tratando de acceder a una localidad que no existe, nice.
        averageOfArray += inputArray[i];
    }
    
    averageOfArray = averageOfArray/arrayLenght;

    console.log("El array es: " + inputArray);
    console.log("Y su promedio es: " + averageOfArray);
}

function escribirEnArchivoDeTexto(){
    let palabraClave = "Delfín Acuático";
    const filesystem = require("fs");
    filesystem.writeFileSync("Laboratorio 8/output.txt", palabraClave);
    console.log("Buenas, se ha escrito en el documento lo siguiente: " + palabraClave);
}