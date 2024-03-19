let p = 45;     //Pause
let f = 24;     //Freischicht
let h = 0;      //Stunde
let m = 0;      //Minute
let a = 0;      //Alles
let g = 0;      //Gehen
let Stunden = 0;
let Stundeng = 0;   //genundet
let Minuten = 0;
let Minuteng = 0;   //genundet

function Pause30 (){
    p = 30+15;
    document.getElementById('eins').innerHTML = 'Pause: 30'
}
function Pause45 (){
    p = 45+15;
    document.getElementById('eins').innerHTML = 'Pause: 45'
}
function Pause60 (){
    p = 60+15;
    document.getElementById('eins').innerHTML = 'Pause: 60'
}
function FreischichtJa (){
    f = 24;
    document.getElementById('zwei').innerHTML = 'Freischicht'
}
function FreischichtNein (){
    f = 0;
    document.getElementById('zwei').innerHTML = 'Keine Freischicht'
}
function Calc(){
    h = prompt("Stunde", "7");      //Stundenabfrage
    m = prompt("Minute", "0");      //Minutenabfrage
    a = (h*60)+(m*1)+(f*1)+(p*1);   //Zusammenrechnen
    g = (a*1)+(7*60);               //7Stunden drauf
    Stunden = g/60;
    Stundeng = Math.floor(Stunden);
    Minuten = Stunden - Stundeng;
    Minuteng = Minuten*60
    Minuteng = Math.floor(Minuteng);
    if(Minuteng<10){
        alert(Stundeng+':0'+Minuteng);
    }
    else{
        alert(Stundeng+':'+Minuteng); 
    }
}