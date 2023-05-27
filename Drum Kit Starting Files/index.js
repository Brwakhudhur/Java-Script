alert("hello Brwa, Your Js is working");




let all = document.querySelectorAll(".drum");
for (let i = 0; i < all.length; i++) {
    all[i].addEventListener('click', butnClik )
};

function butnClik(){
let theLetter = this.innerHTML;
switch (theLetter) {
    case "w":
        var tom1 = new Audio("sounds/kick-bass.mp3");
          tom1.play();
        break;

     case "a":
        var tom2 = new Audio("sounds/crash.mp3");
              tom2.play();
        break;
    case "s":
                var tom3 = new Audio("sounds/snare.mp3");
                  tom3.play();
        break; 
    case "d":
                    var tom4 = new Audio("sounds/tom-1.mp3");
                      tom4.play();
        break;  
    case "j":
            var tom5 = new Audio("sounds/tom-2.mp3");
              tom5.play();
    break;           
    case "k":
            var tom6= new Audio("sounds/tom-3.mp3");
              tom6.play();
    break; 
    case "l":
        var tom7= new Audio("sounds/tom-4.mp3");
          tom7.play();
break; 

    default:
        console.log(theLetter);
        break;
}



this.style.background="blue";

};

let b = document.querySelector("#title");
b.addEventListener("click",titleChange);
function titleChange(){
   b.innerHTML="Title Changed";
};

function adding(num1,num2){
   return parseInt(num1) +parseInt(num2);
}

function operator(num1,num2,ope){
    let result;
    if (ope=== "+"){
        result=adding(num1,num2);
       // result=parseInt(num1) +parseInt(num2);
    }
    else if (ope=== "*"){
        result=num1*num2;
    }
    else{
        result= " invalid option";
    }
    let sho=document.querySelector("#show").innerHTML=result;
    sho.style.color = "white";
}


function end(){
    let num1= document.querySelector("#in1").value;
    let num2= document.querySelector("#in2").value;
    let ope= document.querySelector("#in3").value;
    operator(num1,num2,ope);

}





 document.querySelector("#btn").addEventListener("click",end);






