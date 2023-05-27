window.onload = (event) => {
    console.log("page is fully loaded");
    var refresh = document.getElementById("refresh");
    var result = document.getElementById("result");
    var back1 = document.getElementById("back");



var ranNumber1= Math.floor(Math.random()*6)+1;
var ranNumber2 = Math.floor(Math.random()* 6)+1;
console.log(ranNumber1);
 console.log(ranNumber2);

    var imgchoice1 = "images/dice"+ranNumber1+".png";
    var imgchoice2 = "images/dice" + ranNumber2 + ".png";

   var img1= document.getElementById("img1");
   img1.src=imgchoice1;
   var img2 = document.getElementById("img2");
    img2.src = imgchoice2;


if (ranNumber1==ranNumber2){

    result.innerHTML="Bingo";
    refresh.innerHTML = "Draw ! ";

}
    if (ranNumber1 != ranNumber2) {

        result.innerHTML = "NOOOOOT Match";
    }
if(ranNumber1 > ranNumber2){

    refresh.innerHTML = "Player 1 wins ";

    }
if (ranNumber1 < ranNumber2) {

        refresh.innerHTML = "Player 2 wins ";

    

    }



};

function refreshPage(){
    window.location.reload();
};


