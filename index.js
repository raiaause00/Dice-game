 
 //for dice one ...
var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomDiceimage= "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
var randomimageSource= "images/" + randomDiceimage; //images/dice1.png-dice6.pngg

var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimageSource);

//For Dice two..

var randomNumber2 = Math.floor(Math.random()* 6)+1;
var randomimageSource2 = "images/dice" + randomNumber2 + ".png";
// var img2 = document.querySelectorAll("img")[1];
// img2.setAttribute("src",randomimageSource2);

var img2=document.querySelectorAll("img")[1].setAttribute("src",randomimageSource2)

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!!";
}
else if (randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML= "🎉 Player 2 Wins!!";
else
document.querySelector("h1").innerHTML= "It's a Draw!!";

