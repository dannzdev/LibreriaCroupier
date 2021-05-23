function crearbaraja(baraja){
var baraja = [];
var palos = ["c","d","p","t"];
for(var i=0; i<palos.length; i=i+1){
    for(var j=1; j<=12; j=j+1){
        baraja[baraja.length]={palo:palos[i], valor:j};
        }
    }
return baraja;
}

function barajar(baraja){
    
    var a = 1;
    var b = baraja.length;
    var auxcarta = [];
    console.log("Barajando...")
    for(var i=0; i<100; i=i+1){
        PosA1= Math.round(Math.random()*(b-a)+ a);
        PosA2= Math.round(Math.random()*(b-a)+ a);
        auxcarta[0]=baraja[PosA1];
        baraja[PosA1]=baraja[PosA2];
        baraja[PosA2]= auxcarta[0];
    }
    console.log("Cartas Barajadas...")
    return baraja;
}

function repartir(mano) {
    carta = 0 ;
    if (mano.length > 0) {
        carta = mano[0];
        console.log("La carta agregada a su mano es: "+ mano[0].valor+ mano[0].palo);
        mano.splice(0,1);
        
      }
        else {
        console.log("La baraja está vacía. Inicie correctamente el juego.");
    }
    return carta;
}


function Puntuacarta(mano){
    var total = 0;
    if(mano.length == 4){
        for(i=0; i<mano.length; i=i+1){
            total= total + mano[i].valor
        }
        if(total % 4 == 0){
            total = total*10
            
        }
        console.log("La puntuacion obtenida en su mano es " + total + ".")
    } else {
        console.log("Solo se pueden puntuar manos de 4 cartas")
    }
    return total;
}


var Croupier = {crearbaraja: crearbaraja, barajar: barajar , repartir : repartir, puntuar:Puntuacarta};

