
let chiamateAzzerate:number = 0;
let totalCallCost: number = 0;
interface cell{
   
    credito: number;
    numeroChiamate: number;
    ricarica(ric:number): void;
    chiamata(min:number):void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate():void;
}
class firstUser implements cell{
    public credito: number;
    public numeroChiamate: number;
    public constructor(_credito: number, _numeroChiamate:number){
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric:number): void{
        this.credito = this.credito + ric;
    }
    chiamata(min:number):void{
        for(let i=0;i<min;i++){
            this.credito = this.credito - 0.20;
        }
    }
    numero404(): number{
        return this.credito;
    }
    getNumeroChiamate(): number{
        return this.numeroChiamate;
    }
    azzeraChiamate():void{
        chiamateAzzerate = this.numeroChiamate;
        this.numeroChiamate = 0;
    }

}
class secondUser implements cell{
    public credito: number;
    public numeroChiamate: number;
    public constructor(_credito: number, _numeroChiamate:number){
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric:number): void{
        this.credito = this.credito + ric;
    }
    chiamata(min:number):void{
        for(let i=0;i<min;i++){
            this.credito = this.credito - 0.30;
            totalCallCost += 0.30; 
        }
    }
    numero404(): number{
        return this.credito;
    }
    getNumeroChiamate(): number{
        return this.numeroChiamate;
    }
    azzeraChiamate():void{
        chiamateAzzerate = this.numeroChiamate;
        this.numeroChiamate = 0;
    }

}
class thirdUser implements cell{
    public credito: number;
    public numeroChiamate: number;
    public constructor(_credito: number, _numeroChiamate:number){
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ric:number): void{
        this.credito = this.credito + ric;
    }
    chiamata(min:number):void{
        for(let i=0;i<min;i++){
            this.credito = this.credito - 0.40;
            totalCallCost += 0.40;
        }
    }
    numero404(): number{
        return this.credito;
    }
    getNumeroChiamate(): number{
        return this.numeroChiamate;
    }
    azzeraChiamate():void{
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
console.log('Costo totale chiamata:', totalCallCost.toFixed(2),'$')
console.log('------------------------------------------');

let Tommaso = new secondUser(25, 5);
Tommaso.ricarica(5);
Tommaso.chiamata(50);
console.log('Tommaso:');
console.log('Credito:', Tommaso.numero404().toFixed(2));
Tommaso.azzeraChiamate();
console.log('Chiamate fatte:', Tommaso.getNumeroChiamate());
console.log('Chiamate azzerate:', chiamateAzzerate);
console.log('Costo totale chiamata:', totalCallCost.toFixed(2),'$')
console.log('------------------------------------------');

let Tibor = new thirdUser(20, 6);
Tibor.ricarica(5);
Tibor.chiamata(50);
console.log('Tibor:');
console.log('Credito:', Tibor.numero404().toFixed(2));
Tibor.azzeraChiamate();
console.log('Chiamate fatte:', Tibor.getNumeroChiamate());
console.log('Chiamate azzerate:', chiamateAzzerate);
console.log('Costo totale chiamata:', totalCallCost.toFixed(2),'$')
console.log('------------------------------------------');

var calcBtn = document.getElementById('calc');
var calc1Btn = document.getElementById('calc1');
var calc2Btn = document.getElementById('calc2');

/*------FIRST USER--------*/
let credito = document.getElementById('credito')?.inputMode;
    let numAzzera = document.getElementById('azzChiama');
    let minChiama = document.getElementById('minChiam')?.inputMode;
    let numChiam = document.getElementById('numeroChiamate')?.inputMode;
    let table = document.getElementById('result')?.innerHTML;
calcBtn?.addEventListener('click', ()=>{
    
    let x = new firstUser(Number(credito),Number(numChiam));
    x.chiamata(Number(minChiama));
    if(numAzzera?.ariaChecked){
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
let credito1 = document.getElementById('credito1')?.inputMode;
    let numAzzera1 = document.getElementById('azzChiama1');
    let minChiama1 = document.getElementById('minChiam1')?.inputMode;
    let numChiam1 = document.getElementById('numeroChiamate1')?.inputMode;
    let table1 = document.getElementById('result1')?.innerHTML;
calc1Btn?.addEventListener('click', ()=>{
    
    let y = new secondUser(Number(credito1),Number(numChiam1));
    y.chiamata(Number(minChiama1));
    if(numAzzera1?.ariaChecked){
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
let credito2 = document.getElementById('credito2')?.inputMode;
    let numAzzera2 = document.getElementById('azzChiama2');
    let minChiama2 = document.getElementById('minChiam2')?.inputMode;
    let numChiam2 = document.getElementById('numeroChiamate2')?.inputMode;
    let table2 = document.getElementById('result2')?.innerHTML;
calc2Btn?.addEventListener('click', ()=>{
    
    let z = new thirdUser(Number(credito2),Number(numChiam2));
    z.chiamata(Number(minChiama2));
    if(numAzzera2?.ariaChecked){
        z.azzeraChiamate();
    }

    table2 = `<div> 
                Credito: ${z.numero404()}
                Costo totale chiamata: ${totalCallCost.toFixed(2)}
                Chiamate azzerate: ${chiamateAzzerate}
                Chiamate fatte: ${z.getNumeroChiamate()}
            <div>`;


    

});