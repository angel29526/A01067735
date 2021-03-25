

function problema1(){
    let value = window.prompt("Buenas, ingresar los números");
    let number = Number(value);
    const array1=[];
    const array2=[];
    const array3=[];

    for(i=1;i<=number+1;i++){
        array1.push(i);
        array2.push(i**2);
        array3.push(i**3);
    }

    escribir1(number,array1,array2,array3);

}

function escribir1(number,cont1,cont2,cont3){
    document.open();
    document.write("Número introducido: " + number +"<p></p>")
    document.write("Números del 1 al " + number +": "  + cont1 +"<p></p>")
    document.write("Números del 1 al " + number +": " + cont2 +"<p></p>")
    document.write("Números del 1 al " + number +": " + cont3 +"<p></p>" +"Por el momento no sé cómo evitar que todo lo demás se borre, nice.")
    document.close();
}



function problema2(){
    let randomNumber1 = Math.floor(Math.random() * 11);
    let randomNumber2 = Math.floor(Math.random() * 11);
    let respuesta = randomNumber1+randomNumber2;
    let horaI = new Date();

    let value = window.prompt("Buenas, ingresar el resultado de la suma de "+ randomNumber1 + " y " + randomNumber2 + ", gracias.");
    escribir2(respuesta, value, horaI);
}

function escribir2(respuesta, value, horaI){
    document.open();
    document.write("Respuesta introducida: " + value +"<p></p>");
    if(respuesta==value){ //Comprendo que se está comparando un string y un int, por tanto me funciona en esta ocasión el uso del == en vez del ===, nice.
        document.write("Hurra, la respuesta era "+ respuesta + ", Maravilloso.<p></p>");
    }
    else{
        document.write("Lamentablemente "+value +" no era la respuesta, la respuesta era: " +respuesta+  ", nada que hacer.<p></p>");
    }
    let horaF = new Date() - horaI;
    horaF = horaF/1000;
    document.write("El tiempo en contestar fue de: " + horaF + " segundos.");
    
    document.close();
}

function problema3(){
    let value = window.prompt("Buenas, ingresar el la lista de números separados cada uno por espacios.");
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    let res_array = value.split(" ");
    for(i=0;i<=res_array.length;i++){
        if(res_array[i]>0){
            positivos += 1;
        }
        else if(res_array[i] == 0){
            ceros += 1;
        }
        else if(res_array[i] < 0){
            negativos += 1;
        }
    }
    document.write("Array = " + res_array +"<p>Números positivos: " + positivos + "</p> "+ "<p>Números negativos: " + negativos + "</p>" + "<p>Ceros: " + ceros + "</p>")

}

function problema4(){
    let iterations = window.prompt("Saludos, ingresa el número de arrays que tendrá la matrix.");
    let matrix = [];
    for (i=0;i < iterations;i++){
        let array1 = window.prompt("Ingresa los valores del array #" + (i+1) + " de la matrix separándolos con espacio.");
        array1.split(" ");
        matrix[i] = array1;
    }
    document.write("<p>Buenas: </p>");

    for(i=0;i < iterations;i++){
        document.write("<p></p>"+matrix[i]+" - Promedio: " + average(matrix[i]));
    }
}

function add(total, value){
    return total + value;
}

function average(array1){
    let suma = 0;
    let avg = 0;
    array = parseFloat(array1,10); //Muchos intentos de muchas formas.
    suma = array1.reduce(add, 0);
    avg = suma/array.length;
    return avg;
}

function problema5(){
    let userInput = window.prompt("Buenas, favor de ingresar el número.");
    let array = [];
    array = userInput.split("");
    array = array.reverse();
    array = array.join("") //nueva función interesante, convertir un array de strings a un solo string 
    array = parseFloat(array,10)
    array = array * Math.sign(userInput)
    document.write("Número original: " + userInput + "<p></p>Número inverso: " + array)
}

function problema6(){
    let 
}
