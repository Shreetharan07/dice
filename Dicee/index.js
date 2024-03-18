var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageAddress1="dice" + randomNumber1 + ".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",imageAddress1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imageAddress2="dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imageAddress2);

if (randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Player1 wins";
}
else if (randomNumber1<randomNumber2) {
	document.querySelector("h1").innerHTML="Player2 wins"
}
else{
	document.querySelector("h1").innerHTML="Draw";
}