var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Empate";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 venceu!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 venceu! 🚩";
}

document.querySelector(".inlineBlock .img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".inlineBlock .img2").setAttribute("src", "images/dice"+randomNumber2+".png");