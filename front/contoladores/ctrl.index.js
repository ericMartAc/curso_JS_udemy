
//validaciones de formulario
function bienvenido(usuariosList) {
    document.getElementById('musica').selectedIndex = 0; //controlar el select
    let usuario = prompt('ingrese un usuario');
    if (esVacio(usuario)) {
        document.getElementById('sesionUsu').innerHTML = ('Bienvenido al curso, es usted un intruso')
    } else {
        if (usuario !== usuariosList[0] && usuario !== usuariosList[1] && usuario !== usuariosList[2]) {
            document.getElementById('sesionUsu').innerHTML = ('Bienvenido al curso ' + 'eres un hacker de mierda')
        } else {
            for (let index = 0; index < usuariosList.length; index++) {
                if (usuario === usuariosList[index]) {
                    document.getElementById('sesionUsu').innerHTML = ('Bienvenido al curso ' + usuariosList[index])
                }
            }
        }

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
        confirm('desea enviar los datos al servidor?')
    }
}

//FUNCIONES PÚBLICAS

//validar si es vacio un campo
function esVacio(str) {
    return ('' === str || str === undefined || /^\s*$/.test(str))
}