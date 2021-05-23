function baraja(baraja){
    var baraja = [];
    var palos = ["c","d","p","t"];
    for(var i=0; i<palos.length; i=i+1){
        for(var j=1; j<=12; j=j+1){
            baraja[baraja.length]={palo:palos[i], valor:j};
            }
        }
    return baraja;
    }

    function repartir(baraja) {
        var a = 1;
        var b = baraja.length;
        
        var carta = [];
        console.log("Repartiendo 5 cartas aleatorias...")
        
        if (baraja.length > 0) {
            for(var i=0; i<5; i++){
                carta.push(baraja[Math.round(Math.random()*(b-a)+ a)]);
                
           }
             console.log("Su mano de cartas es "+ "-"+carta[0]+"-" +"-"+carta[1]+"-" +"-"+carta[2]+"-" +"-"+carta[3]+"-" +"-"+carta[4]+"-");
             baraja.splice(0,1);
          }
            else {
            console.log("La baraja está vacía. Inicie correctamente el juego.");
        }
        return carta;
    }

    function Puntuar(mano){
        var total = 0;
        if(mano.length == 5){
            for(i = 0;i<5;i++){

            if(mano[i].valor == 12) {
                mano[i].valor = 12+17;
                console.log("Bonificacion de 17 puntos por Figura REY");
            } else if(mano[i].valor == 11) {
                mano[i].valor = 14+11;
                console.log("Bonificacion de puntos 14  por Figura REINA");
            } else if(mano[i].valor == 10) {
                mano[i].valor = 10+12;
                console.log("Bonificacion de 12 puntos por Figura JOTA");
            } else if(mano[i].valor == 1) {
                mano[i].valor = 1+20;
                console.log("Bonificacion de 20 puntos por Figura AS");
            } else {mano[i].valor = mano[i].valor}
        }
        }
            for(i=0; i<mano.length; i=i+1){
                total= total + mano[i].valor;
            }
            console.log("Su puntuacion total, segun su mano fue : " + total + ".");
            return total;
        }
          
            
    var Croupier = {baraja: baraja, repartir : repartir, puntuar: Puntuar};
