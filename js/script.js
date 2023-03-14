// dogo
// podenco
// alano
// galgo

// let comelon = {

//     D:0,
//     P:0,
//     A:0,
//     G:0,

//     resultado : function(){
//         if(comelon.P > comelon.G &&
//            comelon.A > comelon.G &&
//            comelon.A < comelon.D &&
//            comelon.D > comelon.P){

//             return true;
//         }

//         return false;
           
//     },

//     inter: setInterval(function(){

//         comelon.P = Math.ceil(Math.random()*4) 
//         comelon.G = Math.ceil(Math.random()*4)   
//         comelon.D = Math.ceil(Math.random()*4)   
//         comelon.A = Math.ceil(Math.random()*4)   

//         if(comelon.resultado()){
             
//             clearInterval(comelon.inter)
//             console.log("Galgo", comelon.G); 
//             console.log("Alano", comelon.A); 
//             console.log("Podenco", comelon.P); 
//             console.log("Dogo", comelon.D); 

//         }
//     }, 1)

// }

 
// alejandro e benito = 
// andres e dario = avion
// carlos e tomas =carro


// let vehiculo = {
//     ale:0,
//     be:0,
//     an:0,
//     da:0,
//     ca:0,
//     to:0,
//     av:1,
//     co:2,
//     otro:3,

//     resultado : function (){
        
//         if(vehiculo.ale !== vehiculo.co &&
//             vehiculo.ale == vehiculo.be &&
//             vehiculo.be !== vehiculo.av &&
//             vehiculo.an == vehiculo.av &&
//             vehiculo.ca !== vehiculo.da &&
//             vehiculo.ca !== vehiculo.av ){
                
//                 return true
//             }
//             return false
//     },

//     ve : setInterval(function(){

//         vehiculo.ale = Math.ceil(Math.random()*3)
//         vehiculo.be = Math.ceil(Math.random()*3)
//         vehiculo.an = Math.ceil(Math.random()*3)
//         vehiculo.da = Math.ceil(Math.random()*3)
//         vehiculo.ca = Math.ceil(Math.random()*3)
//         vehiculo.to = Math.ceil(Math.random()*3)

//         if(vehiculo.resultado()){
//             clearInterval(vehiculo.ve)
//             console.log(vehiculo.be)
//             console.log(vehiculo.an)
//             console.log(vehiculo.da)
//             console.log(vehiculo.ca)
//             console.log(vehiculo.to)
//             console.log(vehiculo.ale)
//         }

//     }, 1)

// }

// const isFound = {
//     products: ["pomodoro", "latte", "carotta", "mela"],
//     user: prompt("ciao quele prodotto"),
//     result: function(){
//         for (let i = 0; i < 4; i++){
//             if(this.user == this.products[i]){
//                 return true
//             }           
                
//         }
//     }
    
// }

// if (isFound.result ()){
//     console.log("trovato");
// } else{
//     console.log("no");
// }


// let x = 1;
// const tus = document.getElementById("gre");

// tus.addEventListener("click", function(){
//         document.getElementById("fre").src="img/"+x+".jpg";
//         x += 1;
//         console.log(x);
//         if (x > 4){
//             x = 1;
//         }
// })


let ul = "";
for ( let i = 1; i <=10; i++){
    let re = prompt("dimi un numero")
    ul += re + ",";
    
}

console.log(ul);



