var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randompicture = "dice"+randomNumber1+".png";
var onesource = "/DOM/Dice Challenge/images/"+randompicture;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", onesource );

//__________________________________________________________________________

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randompicture2 = "dice"+randomNumber2+".png";
var onesource2 = "/DOM/Dice Challenge/images/"+randompicture2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", onesource2 );

//__________________________________________________________________________

if(randomNumber1>randomNumber2)
{
  document.querySelector("h2").innerHTML="Huhu..! Dice1 Won the Match 🚩";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h2").innerHTML="Huhu..! Dice2 Won the Match 🚩";
}
else if(randomNumber1=randomNumber2)
{
    document.querySelector("h2").innerHTML="Huhu..! Match is Draw 🚩";
}

//__________________________________________________________________________

// if(randomNumber1==1)
// {
//     document.querySelectorAll("img")[0].setAttribute("src",/images/dice1.png) ;
// }
// else if(randomNumber1==2)
// {
//     document.querySelectorAll("img")[0].setAttribute("src",/images/dice2.png) ;
// }
// else if(randomNumber1==3)
// {
//     document.querySelectorAll("img")[0].setAttribute("src",/images/dice3.png) ;
// }
// else if(randomNumber1==4)
// {
//     document.querySelectorAll("img")[0].setAttribute("src",/images/dice4.png) ;
// }
// else if(randomNumber1==5)
// {
//     document.querySelectorAll("img")[0].setAttribute("src",/images/dice5.png) ;
// }
// else if(randomNumber1==6)
// {
//     document.querySelectorAll("img")[0].setAttribute("src",/images/dice6.png) ;
// }