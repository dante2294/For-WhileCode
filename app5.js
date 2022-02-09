let user=0;
let dragon=0;
let damageinput="";
let winner;

let damageDealt= Math.floor(Math.random()*Number(damageinput)+1);
let dragonDamage= Math.floor(Math.random()*3);

//for(let i=0;i<10; i++) {
//    user=user+dragonDamage;
//    dragon=dragon+damageDealt;


while (user<=5 && dragon<=10){
    damageinput=Number(prompt("How much damage do you want to cause the Dragon? No more than 5."))
    user=user+dragonDamage;
    dragon=dragon+damageDealt;
//    user&&dragon++



}if (damageinput>5){
    dragon=dragon+1;
    user=user+dragonDamage;
}else {
    dragon=dragon+damageDealt;
    user=user+dragonDamage;
}

if (user<5 && dragon>=10) {
    winner = "You win"

}else if (user>5 && dragon<10){
    winner ="The Dragon wins"
}else{
    winner=Error
}


document.body.innerHTML=winner;







//let number=0
//let start=0
//let answer="";
//for(let i=0;i<6; i++ ){
//    number=number+2;
//}

//while(start<4){
//    number=number+2;
//    start++;
//}

//while(answer!=="*"){
//    answer=prompt("What symbol would you like")



