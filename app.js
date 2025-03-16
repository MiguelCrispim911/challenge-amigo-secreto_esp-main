// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == ""){
        alert("Por favor, inserte un nombre.");
    } else{
        amigos.push(nombreAmigo);
        limpiarinput();
        actualizarlista();
    }
}

function limpiarinput() {
    document.getElementById('amigo').value = '';
}

function actualizarlista(){
    let listaNoOrdenada = document.getElementById('listaAmigos');
    listaNoOrdenada.innerHTML = "";

    for (let i=0; i<amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaNoOrdenada.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert("El listado está vacio");
    } else {
        let numeroGenerado =  Math.floor(Math.random()*amigos.length);
        console.log(numeroGenerado);
        let amigoSecreto= amigos[numeroGenerado];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "El amigo secreto es: " + amigoSecreto;
        limpiarLista();
        amigos=[]
    }
}


function limpiarLista(){
    let listaNoOrdenada = document.getElementById('listaAmigos');
    listaNoOrdenada.innerHTML = "";
}