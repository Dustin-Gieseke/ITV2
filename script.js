// let i = 500; //Zähler

// function Kaufland(){
//     console.log(i);
//     if (i>25){
//         i = i - 25;
//         setTimeout(Bischkala, i);
//     }
//     else if(i>0){
//         i = i - 1;
//         setTimeout(Bischkala, i);
//     }
//     else{
//         document.write('<h1 id="W"> WIR SIND DA.</h1>'+'<br>'+'<h1 id="G">Herr Vieth sagt NEIN zu Darkmode.</h1>');
//         document.getElementById("W").style.fontFamily = 'Arial Black';
//         document.getElementById("W").style.textAlign = 'Center';
//         document.getElementById("W").style.fontSize = '100px';
//         document.getElementById("W").style.paddingTop = '300px';
//         document.getElementById("G").style.fontFamily = 'Arial Black';
//         document.getElementById("G").style.textAlign = 'Center';
//         document.getElementById("G").style.fontSize = '50px';
//         document.getElementById("G").style.paddingTop = '0px';
//         setTimeout(WANTED,1000);
//     }
// }

function Bischkala() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    // Kaufland();
}