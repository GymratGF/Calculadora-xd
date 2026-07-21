function  agregarNumero(valor) {
    document.getElementById("pantalla").value += valor;
}



function calcular() {
try {
    document.getElementById("pantalla").value = eval(document.getElementById("pantalla").value); 

} catch (error) {
    document.getElementById("pantalla").value = "Error";
}


}
function borrarTodo () {
    document.getElementById("pantalla").value = "";
}
function borrarUno () {
    document.getElementById("pantalla").value = document.getElementById("pantalla").value.slice(0, -1);
}
//codigo actualizado