// DOM
const usu = document.getElementById("usuario");
const psw = document.getElementById("psw");
const tecno = document.getElementById("tecno");
const gen = document.getElementById('genero');
const ocu = document.getElementById('ocupacion');
const music = document.getElementById('musica');
const com = document.getElementById('comentarios');


//validaciones de formulario
function reset_campos() {
    document.getElementById("usuario").innerHTML = ('');
    document.getElementById("psw").innerHTML = ('');
    document.getElementById("tecno").innerHTML = ('');
    document.getElementById('genero').innerHTML = ('');
    document.getElementById('ocupacion').innerHTML = ('4');
    document.getElementById('musica').innerHTML = ('');
    document.getElementById('comentarios').innerHTML = ('');
}

function enviar_datos() {
    let datos = [];

    if (esVacio(usu.value)) {
        console.log('debe ingresar un valor de usuario: ', usu.value)

    } else {
        console.log('continuar: ', usu.value)
    }
}


//FUNCIONES PÚBLICAS

//validar si es vacio un campo
function esVacio(str) {
    return ('' === str || str === undefined || /^\s*$/.test(str))
}