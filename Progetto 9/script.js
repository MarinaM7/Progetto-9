"use strict";
class LineaTel {
    constructor(_credito, _numChiamate) {
        this.credito = _credito,
            this.numChiamate = _numChiamate;
        this.minutiChiamata = Math.floor(Math.random() * (20 - 1) + 1);
        this.euroRicarica = Math.floor(Math.random() * (30 - 5) + 5);
    }
    // ricarica il credito con un numero random
    ricarica() {
        var credito = this.credito + this.euroRicarica;
        return credito;
    }
    // esegue una chiamata di random minuti
    chiamata() {
        return this.minutiChiamata;
    }
    // calola il credito residuo eseguendo --> creditoTot - (minutiChimata*chiamateEffettuate)*costoMinuto
    numero404() {
        var costo = this.ricarica() - ((this.chiamata() * this.getNumChiamate()) * 20) / 100;
        return costo;
    }
    getNumChiamate() {
        var num = this.numChiamate;
        return num;
    }
    azzeraChiamate() {
        0;
    }
}
var user1 = new LineaTel(30, 3);
console.log('User 1', user1);
console.log('credito dopo ricarica', user1.ricarica());
console.log('durata chiamata', user1.chiamata());
console.log('chimate effettuate', user1.getNumChiamate());
console.log('credito residuo', user1.numero404());
console.log('----------');
var user2 = new LineaTel(15, 5);
console.log('User 2', user2);
console.log('credito dopo ricarica', user2.ricarica());
console.log('durata chiamata', user2.chiamata());
console.log('chimate effettuate', user2.getNumChiamate());
console.log('credito residuo', user2.numero404());
console.log('----------');
var user3 = new LineaTel(5, 4);
console.log('User 3', user3);
console.log('credito dopo ricarica', user3.ricarica());
console.log('durata chiamata', user3.chiamata());
console.log('chimate effettuate', user3.getNumChiamate());
console.log('credito residuo', user3.numero404());
console.log('----------');
//'Il credito attuale è di € ' + credito + ' grazie ad una ricarica di € ' + random
//'La chiamata è durata: ' + minuti + 'min'
