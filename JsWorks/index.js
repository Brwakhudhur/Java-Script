







function operation(num1,num2,ope){
    let result ;
    
if(ope ==="+") {
    result= num1 + num2;
}

else if(ope ==="*") {
    result= num1 * num2;
}
else if(ope ==="/") {
    result= num1 / num2;
 }
else if(ope ==="-") {
    result= num1 - num2;
 }
else{ 
     result="Invalid Operator";
} 
 document.querySelector("#show").innerHTML="Result = "+result;

};



function calnum(){
    let num1= parseFloat(document.querySelector("#inp1").value);
    let num2= parseFloat(document.querySelector("#inp2").value);
    let ope= document.querySelector("#inp3").value;
operation(num1,num2,ope);


};


document.querySelector("#sub").addEventListener("click",calnum);

let uls=document.querySelectorAll("ul");

    for (let i = 0; i < uls.length; i++) {
        uls[i]=  uls[i].addEventListener("click",butonclicked);
       
   };

   function butonclicked(){

    let selected =this.innerHTML;
    theSounds(selected);
   
    this.style.color="red";
    this.style.fontSize="20px";
    this.innerHTML=" selected";

   }

   function refresh(){
    location.reload();
   }
   document.querySelector("#ref").addEventListener("click",refresh);

   let brwa={
    name:"Brwa",
    age:34,
    country:"Canada"
   }

   brwa.born="Erbil";

 document.querySelector("#demo").innerHTML="The age of "+brwa.name+
   " is "+brwa.age + " place of birth is "+ brwa.born+".";





   let  object = {
    name: "Brwa",
    age: 34,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

let wishCars="";
let mod ="";

for (let i = 0; i < object.cars.length; i++) {

wishCars +=" " +object.cars[i].name +" " ;

for (let j = 0; j < object.cars[i].models.length; j++) {
 mod +=  "  <br>" +  object.cars[i].models[j]+ "  "
}
    
}


document.querySelector("#demo2").innerHTML= " The name is "+object.name 
+" he wished to have  "+ wishCars  + "  wish to  these models " + mod ;



function Flores(place,country,people){
    this.place= place;
    this.country=country;
    this.people=people

    this.travel=function(){
        alert("start traveling");
    }

    
}


let bk= new Flores("folres","Guatemala",3);



let flor = document.querySelector("#demo3");
flor.innerHTML= Object.values(bk);
// flor.innerHTML= bk.travel();

document.addEventListener("keypress",function (event){
    theSounds(event.key);
    console(event);


})

function theSounds(key){
    switch (key) {
        case "Drake":
            var audio1 = new Audio("Audio/drake.mp3");
            audio1.play();
            break;
        case "d":
                var audio1 = new Audio("Audio/drake.mp3");
                audio1.play();
                break;
        case "Queen":
            
                var audio2 = new Audio("Audio/Queen.mp3");
                audio2.play();
            break;
        case "q":
            
            var audio2 = new Audio("Audio/Queen.mp3");
            audio2.play();
        break;    
            case "Maluma":
                var audio1 = new Audio("Audio/Maluma.mp3");
                audio1.play();
            break;

        case "m":
                var audio1 = new Audio("Audio/Maluma.mp3");
                audio1.play();
            break;    

            case "Shakira":
                var audio1 = new Audio("Audio/Shakira.mp3");
                audio1.play();
            break;
         case "s":
                var audio1 = new Audio("Audio/Shakira.mp3");
                audio1.play();
            break;
    
        default:
            console.log(this.innerHTML);
            break;

    }
}



