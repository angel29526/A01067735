let firstLogin = 0;
const validacion = document.querySelector('.validacionNew');
const validacion2 = document.querySelector(".validacionOld");
const username = document.querySelector('.username');

let fieldUserReg = document.querySelector('.fieldUserRegistry');
const guessSubmitReg = document.querySelector('.guessSubmitRegistry');
let fieldUserLog = document.querySelector('.fieldUserLogIn');
const guessSubmitLog = document.querySelector('.guessSubmitLogIn');
const users = [];

function newUser(){
    
    let userInput = String(fieldUserReg.value);
    
    users.push(userInput);
    console.log(users);
    username.textContent = "Nombres de usuarios almacenados: " + users;
    validacion.textContent = "";

    fieldUserReg.value = '';
    guessSubmitLog.focus();
}

function iniciarSesion(){
    let userInput = String(fieldUserLog.value);
    console.log(users[0]);
    console.log(userInput);

    if(users[0] === undefined){
        validacion.textContent = "No existen usuarios, crear nuevo.";
        validacion.style.color = "red";
    }
    
    for(i=0;i<=users.length;i++){
        if (userInput === users[i]){
            validacion2.textContent = "Inicio de Sesión Correcto!";
            validacion2.style.color = "green";
            /*
            fieldUserLog.disabled = true;
            guessSubmitLog.disabled = true; //Sección necesaria algún día.
            */
        }
        else if (userInput.value !== users[i]){
            validacion2.textContent = "Incicio de sesión erroneo, inténtalo de nuevo.";
            validacion2.style.color = "red";
        }    
    }
    
    fieldUser.value = '';
    guessSubmitLog.focus();
}


const comprado = document.querySelector('.enCarrito');
const stock = document.querySelector('.stockActual');
const confirm = document.querySelector(".confirmation");
const costos = document.querySelector(".costos"); //De alguna forma, cuando arreglé la lectura de "costos", agregarcarrito() ahora sólo funciona 1 vez, maravilloso.
const perrito = document.getElementById("perrito");

let button = document.getElementById("accionesComprar");
let button2 = document.getElementById("accionesComprar-")
let randomNumber = Math.floor(Math.random() * 11);
stock.value = randomNumber;
let bought = 0;

const outOfStock = Error("No hay stock");
const notEnoughStock = Error("No hay suficiente stock para el pedido realizado");
const notInCar = Error("No hay productos en el carrito.");

function tienda(){
    console.log(randomNumber);
    stock.textContent = "Stock actual: " + stock.value;

    button.textContent = "Agregar 1 al carrito";
    button.onclick = agregarCarrito;
    button2.onclick = eliminarCarrito;
}

function agregarCarrito(){
    console.log("Se está activando el botón");

    if(stock.value === 0){
        confirm.textContent = outOfStock;
    }
    else{
        bought += 1;
        comprado.textContent = "Productos en carrito: " + bought;
        
        if(stock.value === bought){
            button.disabled = true;
        }
        else{
            button.disabled = false;
        }
    }
    console.log(bought);
}

function eliminarCarrito(){
    console.log("Se está activando el botón");

    if(bought === 0){
        button2.disabled = true;
    }

    else if(bought > 0){
        button2.disabled = false;
        bought -= 1;
        comprado.textContent = "Productos en carrito: " + bought;
    }
    console.log(bought);
}
