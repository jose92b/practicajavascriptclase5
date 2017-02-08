function invertir() {
    var cadena = document.getElementById('original').value;
    var x = cadena.length;
    var cadenaInvertida = "";
    while (x >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    document.getElementById('Resultado').value = cadenaInvertida;
}

function charposition() {

}