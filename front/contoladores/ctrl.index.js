
//validaciones de formulario
function bienvenido() {
    let usuario = prompt('ingrese un usuario');
    if (esVacio(usuario)) {
        document.getElementById('sesionUsu').innerHTML = ('Bienvenido al curso intruso')
    } else {
        document.getElementById('sesionUsu').innerHTML = ('Bienvenido al curso '+usuario)
    }
}

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
    let usu = document.getElementById("usuario");
    let psw = document.getElementById("psw");
    let tecno = document.getElementById("tecno");
    let gen = document.getElementById('genero');
    let ocu = document.getElementById('ocupacion');
    let music = document.getElementById('musica');
    let com = document.getElementById('comentarios');

    if (esVacio(usu.value) || esVacio(psw) ||
        esVacio(tecno) || esVacio(gen)) {
        alert('debe ingresar todos los valores')
    } else {
        console.log('continuar: ', usu.value)
    }
}


//FUNCIONES PÚBLICAS

//validar si es vacio un campo
function esVacio(str) {
    return ('' === str || str === undefined || /^\s*$/.test(str))
}