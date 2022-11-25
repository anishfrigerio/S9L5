
let chiamateAzzerate: number = 0;
let totalCallCost: number = 0;
interface cell {

    credito: number;
    numeroChiamate: number;
    ricarica(ric: number): void;
    chiamata(min: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}
class firstUser implements cell {
    public credito: number;
    public numeroChiamate: number;
    public constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric: number): void {
        this.credito = this.credito + ric;
    }
    chiamata(min: number): void {
        for (let i = 0; i < min; i++) {
            this.credito = this.credito - 0.20;
            totalCallCost += 0.20;
        }
    }
    numero404(): number {
        return this.credito;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        chiamateAzzerate = this.numeroChiamate;
        this.numeroChiamate = 0;
    }

}
class secondUser implements cell {
    public credito: number;
    public numeroChiamate: number;
    public constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric: number): void {
        this.credito = this.credito + ric;
    }
    chiamata(min: number): void {
        for (let i = 0; i < min; i++) {
            this.credito = this.credito - 0.30;
            totalCallCost += 0.30;
        }
    }
    numero404(): number {
        return this.credito;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        chiamateAzzerate = this.numeroChiamate;
        this.numeroChiamate = 0;
    }

}
class thirdUser implements cell {
    public credito: number;
    public numeroChiamate: number;
    public constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric: number): void {
        this.credito = this.credito + ric;
    }
    chiamata(min: number): void {
        for (let i = 0; i < min; i++) {
            this.credito = this.credito - 0.40;
            totalCallCost += 0.40;
        }
    }
    numero404(): number {
        return this.credito;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
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
console.log('Costo totale chiamata:', totalCallCost.toFixed(2), '$')
console.log('------------------------------------------');

let Tommaso = new secondUser(25, 5);
Tommaso.ricarica(5);
Tommaso.chiamata(50);
console.log('Tommaso:');
console.log('Credito:', Tommaso.numero404().toFixed(2));
Tommaso.azzeraChiamate();
console.log('Chiamate fatte:', Tommaso.getNumeroChiamate());
console.log('Chiamate azzerate:', chiamateAzzerate);
console.log('Costo totale chiamata:', totalCallCost.toFixed(2), '$')
console.log('------------------------------------------');

let Tibor = new thirdUser(20, 6);
Tibor.ricarica(5);
Tibor.chiamata(50);
console.log('Tibor:');
console.log('Credito:', Tibor.numero404().toFixed(2));
Tibor.azzeraChiamate();
console.log('Chiamate fatte:', Tibor.getNumeroChiamate());
console.log('Chiamate azzerate:', chiamateAzzerate);
console.log('Costo totale chiamata:', totalCallCost.toFixed(2), '$')
console.log('------------------------------------------');

/*---------SECONDA PARTE OPZIONALE----------*/

var calcBtn = document.getElementById('calc');
var calc1Btn = document.getElementById('calc1');
var calc2Btn = document.getElementById('calc2');

/*------FIRST USER--------*/
let credito = document.getElementById('credito') as HTMLInputElement;
let numAzzera = document.getElementById('azzChiama') as HTMLInputElement;
let minChiama = document.getElementById('minChiam') as HTMLInputElement;
let numChiam = document.getElementById('numeroChiamate') as HTMLInputElement;
let ricarica = document.getElementById('ricarica') as HTMLInputElement;
let table = document.getElementById('result') as HTMLElement;
totalCallCost = 0;
chiamateAzzerate = 0;

calcBtn?.addEventListener('click', () => {
    let x = new firstUser(Number(credito.value), Number(numChiam.value));
    x.chiamata(Number(minChiama.value));
    x.ricarica(Number(ricarica.value));
    if (numAzzera?.checked) {
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
let credito1 = document.getElementById('credito1') as HTMLInputElement;
let numAzzera1 = document.getElementById('azzChiama1') as HTMLInputElement;
let minChiama1 = document.getElementById('minChiam1') as HTMLInputElement;
let numChiam1 = document.getElementById('numeroChiamate1') as HTMLInputElement;
let ricarica1 = document.getElementById('ricarica1') as HTMLInputElement;
let table1 = document.getElementById('result1') as HTMLElement;
totalCallCost = 0;
chiamateAzzerate = 0;
calc1Btn?.addEventListener('click', () => {

    let y = new secondUser(Number(credito1.value), Number(numChiam1.value));
    y.chiamata(Number(minChiama1.value));
    y.ricarica(Number(ricarica1.value));
    if (numAzzera1?.checked) {
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
let credito2 = document.getElementById('credito2') as HTMLInputElement;
let numAzzera2 = document.getElementById('azzChiama2') as HTMLInputElement; let minChiama2 = document.getElementById('minChiam2') as HTMLInputElement;
let numChiam2 = document.getElementById('numeroChiamate2') as HTMLInputElement;
let ricarica2 = document.getElementById('ricarica2') as HTMLInputElement;
let table2 = document.getElementById('result2') as HTMLElement;
totalCallCost = 0;
chiamateAzzerate = 0;

calc2Btn?.addEventListener('click', () => {

    let z = new thirdUser(Number(credito2.value), Number(numChiam2.value));
    z.chiamata(Number(minChiama2.value));
    z.ricarica(Number(ricarica2.value));
    if (numAzzera2?.checked) {
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