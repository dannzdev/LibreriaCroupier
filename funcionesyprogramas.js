function PuntuaMano(mano){
    var total = 0;
    for( var i = 0; i<mano.length; i = i+1){
        total = total + puntuacarta(mano[i])
    }
    return total;
}


function imprime(resultado, resultado1){
    console.log("La puntuacion del Jugador 1 es " + resultado);
    console.log("La puntuacion del Jugador 2 es " + resultado1);
    if(resultado > resultado1){
        console.log("El 1º Jugador es el Ganador");
    } else {
        console.log("El 2º Jugador es el Ganador");
    }
}

function puntuacarta(carta){
    var puntuacion = carta.valor;
    
    if(carta.valor == 1){
        puntuacion = 20;
    }
    if(carta.palo === "c" || carta.palo === "d"){
        puntuacion = puntuacion * 2
    }
    return puntuacion;
}

function Programa() {
    var mano1 = [{palo:"c", valor:2}, {palo:"t", valor:1}, {palo:"d", valor: 12}];
    var mano2 = [{palo:"c", valor:4}, {palo:"t", valor:9}, {palo:"d", valor: 8}];
    var resultado= PuntuaMano(mano1);
    var resultado1= PuntuaMano(mano2);
    imprime(resultado, resultado1);
}
