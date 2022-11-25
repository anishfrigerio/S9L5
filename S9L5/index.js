"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
var calcBtn = document.getElementById('calc');
var calc1Btn = document.getElementById('calc1');
var calc2Btn = document.getElementById('calc2');
/*------FIRST USER--------*/
let credito = (_a = document.getElementById('credito')) === null || _a === void 0 ? void 0 : _a.inputMode;
let numAzzera = document.getElementById('azzChiama');
let minChiama = (_b = document.getElementById('minChiam')) === null || _b === void 0 ? void 0 : _b.inputMode;
let numChiam = (_c = document.getElementById('numeroChiamate')) === null || _c === void 0 ? void 0 : _c.inputMode;
let table = (_d = document.getElementById('result')) === null || _d === void 0 ? void 0 : _d.innerHTML;
calcBtn === null || calcBtn === void 0 ? void 0 : calcBtn.addEventListener('click', () => {
    let x = new firstUser(Number(credito), Number(numChiam));
    x.chiamata(Number(minChiama));
    if (numAzzera === null || numAzzera === void 0 ? void 0 : numAzzera.ariaChecked) {
        x.azzeraChiamate();
    }
    table = `<div> 
                Credito: ${x.numero404()}
                Costo totale chiamata: ${totalCallCost.toFixed(2)}
                Chiamate azzerate: ${chiamateAzzerate}
                Chiamate fatte: ${x.getNumeroChiamate()}
            <div>`;
});
/*---------SECOND USER-------*/
let credito1 = (_e = document.getElementById('credito1')) === null || _e === void 0 ? void 0 : _e.inputMode;
let numAzzera1 = document.getElementById('azzChiama1');
let minChiama1 = (_f = document.getElementById('minChiam1')) === null || _f === void 0 ? void 0 : _f.inputMode;
let numChiam1 = (_g = document.getElementById('numeroChiamate1')) === null || _g === void 0 ? void 0 : _g.inputMode;
let table1 = (_h = document.getElementById('result1')) === null || _h === void 0 ? void 0 : _h.innerHTML;
calc1Btn === null || calc1Btn === void 0 ? void 0 : calc1Btn.addEventListener('click', () => {
    let y = new secondUser(Number(credito1), Number(numChiam1));
    y.chiamata(Number(minChiama1));
    if (numAzzera1 === null || numAzzera1 === void 0 ? void 0 : numAzzera1.ariaChecked) {
        y.azzeraChiamate();
    }
    table1 = `<div> 
                Credito: ${y.numero404()}
                Costo totale chiamata: ${totalCallCost.toFixed(2)}
                Chiamate azzerate: ${chiamateAzzerate}
                Chiamate fatte: ${y.getNumeroChiamate()}
            <div>`;
});
/*----------THIRD USER----------*/
let credito2 = (_j = document.getElementById('credito2')) === null || _j === void 0 ? void 0 : _j.inputMode;
let numAzzera2 = document.getElementById('azzChiama2');
let minChiama2 = (_k = document.getElementById('minChiam2')) === null || _k === void 0 ? void 0 : _k.inputMode;
let numChiam2 = (_l = document.getElementById('numeroChiamate2')) === null || _l === void 0 ? void 0 : _l.inputMode;
let table2 = (_m = document.getElementById('result2')) === null || _m === void 0 ? void 0 : _m.innerHTML;
calc2Btn === null || calc2Btn === void 0 ? void 0 : calc2Btn.addEventListener('click', () => {
    let z = new thirdUser(Number(credito2), Number(numChiam2));
    z.chiamata(Number(minChiama2));
    if (numAzzera2 === null || numAzzera2 === void 0 ? void 0 : numAzzera2.ariaChecked) {
        z.azzeraChiamate();
    }
    table2 = `<div> 
                Credito: ${z.numero404()}
                Costo totale chiamata: ${totalCallCost.toFixed(2)}
                Chiamate azzerate: ${chiamateAzzerate}
                Chiamate fatte: ${z.getNumeroChiamate()}
            <div>`;
});
