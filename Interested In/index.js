
let iNumber = Math.floor(Math.random() * 5)+1;
let imgS = "src/" + iNumber + ".png"

let setImg = document.querySelectorAll("img")[0];

setImg.setAttribute('src' , imgS);



if(iNumber == 1){
    document.querySelector("h1").innerHTML = "Interested in - Eating Some Food"
 }
 else if(iNumber == 2){
    document.querySelector("h1").innerHTML = "Interested in - Driving Cars"
 }
 else if(iNumber == 3){
    document.querySelector("h1").innerHTML = "Interested in - Travelling"
 }
 else if(iNumber == 4){
    document.querySelector("h1").innerHTML = "Interested in - Relaxing"
 }
 else if(iNumber == 5){
    document.querySelector("h1").innerHTML = "Interested in - Working or Studying"
 }
 else{}

