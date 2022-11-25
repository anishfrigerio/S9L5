"use strict";
let chiamateAzzerate = 0;
let totalCallCost = 0;
class firstUser {
    constructor(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric) {
        this.credito = this.credito + ric;
    }
    chiamata(min) {
        for (let i = 0; i < min; i++) {
            this.credito = this.credito - 0.20;
            totalCallCost += 0.20;
        }
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        chiamateAzzerate = this.numeroChiamate;
        this.numeroChiamate = 0;
    }
}
class secondUser {
    constructor(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric) {
        this.credito = this.credito + ric;
    }
    chiamata(min) {
        for (let i = 0; i < min; i++) {
            this.credito = this.credito - 0.30;
            totalCallCost += 0.30;
        }
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        chiamateAzzerate = this.numeroChiamate;
        this.numeroChiamate = 0;
    }
}
class thirdUser {
    constructor(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric) {
        this.credito = this.credito + ric;
    }
    chiamata(min) {
        for (let i = 0; i < min; i++) {
            this.credito = this.credito - 0.40;
            totalCallCost += 0.40;
        }
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        chiamateAzzerate = this.numeroChiamate;
        this.numeroChiamate = 0;
    }
}
let Anish = new firstUser(30, 2);
Anish.ricarica(5);
Anish.chiamata(50);
console.log('Anish:');
console.log('Credito:', Anish.numero404().toFixed(2));
Anish.azzeraChiamate();
console.log('Chiamate fatte:', Anish.getNumeroChiamate());
console.log('Chiamate azzerate:', chiamateAzzerate);
console.log('Costo totale chiamata:', totalCallCost.toFixed(2), '$');
console.log('------------------------------------------');
let Tommaso = new secondUser(25, 5);
Tommaso.ricarica(5);
Tommaso.chiamata(50);
console.log('Tommaso:');
console.log('Credito:', Tommaso.numero404().toFixed(2));
Tommaso.azzeraChiamate();
console.log('Chiamate fatte:', Tommaso.getNumeroChiamate());
console.log('Chiamate azzerate:', chiamateAzzerate);
console.log('Costo totale chiamata:', totalCallCost.toFixed(2), '$');
console.log('------------------------------------------');
let Tibor = new thirdUser(20, 6);
Tibor.ricarica(5);
Tibor.chiamata(50);
console.log('Tibor:');
console.log('Credito:', Tibor.numero404().toFixed(2));
Tibor.azzeraChiamate();
console.log('Chiamate fatte:', Tibor.getNumeroChiamate());
console.log('Chiamate azzerate:', chiamateAzzerate);
console.log('Costo totale chiamata:', totalCallCost.toFixed(2), '$');
console.log('------------------------------------------');
/*---------SECONDA PARTE OPZIONALE----------*/
var calcBtn = document.getElementById('calc');
var calc1Btn = document.getElementById('calc1');
var calc2Btn = document.getElementById('calc2');
/*------FIRST USER--------*/
let credito = document.getElementById('credito');
let numAzzera = document.getElementById('azzChiama');
let minChiama = document.getElementById('minChiam');
let numChiam = document.getElementById('numeroChiamate');
let ricarica = document.getElementById('ricarica');
let table = document.getElementById('result');
totalCallCost = 0;
chiamateAzzerate = 0;
calcBtn === null || calcBtn === void 0 ? void 0 : calcBtn.addEventListener('click', () => {
    let x = new firstUser(Number(credito.value), Number(numChiam.value));
    x.chiamata(Number(minChiama.value));
    x.ricarica(Number(ricarica.value));
    if (numAzzera === null || numAzzera === void 0 ? void 0 : numAzzera.checked) {
        x.azzeraChiamate();
    }
    table.innerHTML = `<div> 
    Credito: ${x.credito.toFixed(2)}$<br>
    Costo totale chiamata: ${totalCallCost.toFixed(2)}$<br>
    Chiamate azzerate: ${chiamateAzzerate}<br>
    Chiamate fatte: ${x.getNumeroChiamate()}<br>
<div>`;
    credito.value = "";
    minChiama.value = "";
    numChiam.value = "";
});
/*---------SECOND USER-------*/
let credito1 = document.getElementById('credito1');
let numAzzera1 = document.getElementById('azzChiama1');
let minChiama1 = document.getElementById('minChiam1');
let numChiam1 = document.getElementById('numeroChiamate1');
let ricarica1 = document.getElementById('ricarica1');
let table1 = document.getElementById('result1');
totalCallCost = 0;
chiamateAzzerate = 0;
calc1Btn === null || calc1Btn === void 0 ? void 0 : calc1Btn.addEventListener('click', () => {
    let y = new secondUser(Number(credito1.value), Number(numChiam1.value));
    y.chiamata(Number(minChiama1.value));
    y.ricarica(Number(ricarica1.value));
    if (numAzzera1 === null || numAzzera1 === void 0 ? void 0 : numAzzera1.checked) {
        y.azzeraChiamate();
    }
    table1.innerHTML = `<div> 
                Credito: ${y.credito.toFixed(2)}$<br>
                Costo totale chiamata: ${totalCallCost.toFixed(2)}$<br>
                Chiamate azzerate: ${chiamateAzzerate}<br>
                Chiamate fatte: ${y.getNumeroChiamate()}<br>
            <div>`;
    credito1.value = "";
    minChiama1.value = "";
    numChiam1.value = "";
});
/*----------THIRD USER----------*/
let credito2 = document.getElementById('credito2');
let numAzzera2 = document.getElementById('azzChiama2');
let minChiama2 = document.getElementById('minChiam2');
let numChiam2 = document.getElementById('numeroChiamate2');
let ricarica2 = document.getElementById('ricarica2');
let table2 = document.getElementById('result2');
totalCallCost = 0;
chiamateAzzerate = 0;
calc2Btn === null || calc2Btn === void 0 ? void 0 : calc2Btn.addEventListener('click', () => {
    let z = new thirdUser(Number(credito2.value), Number(numChiam2.value));
    z.chiamata(Number(minChiama2.value));
    z.ricarica(Number(ricarica2.value));
    if (numAzzera2 === null || numAzzera2 === void 0 ? void 0 : numAzzera2.checked) {
        z.azzeraChiamate();
    }
    table2.innerHTML = `<div> 
                Credito: ${z.credito.toFixed(2)}$<br>
                Costo totale chiamata: ${totalCallCost.toFixed(2)}$<br>
                Chiamate azzerate: ${chiamateAzzerate}<br>
                Chiamate fatte: ${z.getNumeroChiamate()}<br>
            <div>`;
    credito2.value = "";
    minChiama2.value = "";
    numChiam2.value = "";
});
