let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoDeUsuario(elemento, texto){
    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoDeUsuario('p', `Has acertado el número secreto en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoDeUsuario('p', 'El número ingresado es menor que el número secreto.')
        } else{
            asignarTextoDeUsuario('p', 'El número ingresado es mayor que el número secreto.')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(){
    asignarTextoDeUsuario('h1', 'Juego del número secreto.');
    asignarTextoDeUsuario('p', `Indica un número de 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo + 1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoDeUsuario('p', 'Ya se sortearon todos los números posibles!!!');
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Mostrar mensaje de intervalo de numeros
    //generar numero aleatorio
    //reiniciar el contador de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();