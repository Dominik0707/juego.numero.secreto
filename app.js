let numerosecreto = 0; 
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximoIntentos = 3;
console.log(numerosecreto)

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numerosecreto) { 
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if ( numeroUsuario > numerosecreto) {
            asignarTextoElemento('p', 'el número es menor');
        } else {
            asignarTextoElemento('p', 'el número es mayor');            
        }
        intentos++; 
        limpiarcaja();
    }
    return;
}


function limpiarcaja() {
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
   
    let numeroGenerado = Math.floor(Math.random()*10)+1; 
    console.log(listaNumeroSorteado);
    console.log(numeroGenerado);
     if(listaNumeroSorteado.length == numeroMaximoIntentos){
        asignarTextoElemento('p','has finalizado el juego')
     } else{

        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto(); 
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
     }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','indica un número del 1 al 10');
    numerosecreto = generarNumeroSecreto()
    intentos = 1;

}

function reiniciarJuego() {
    //limpiarcaja
    limpiarcaja()
    //ganerar numero aleatorio
    //indicar mensaje de interbalo de numeros 
    condicionesIniciales()
    //iniciar el numero de intentos 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales()