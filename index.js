// console.log("task2 of DOM")
var title = document.getElementById("main-header");
title.style.borderBottom ="solid 5px #000";
var Element = document.querySelectorAll('h2')
// console.log(Element[0])
Element[0].style.color = "green";
Element[0].style.fontWeight = "bold";

// Element.style.FontWeight = "bold"
// Element.style.color = "green"
var Bg_green = document.getElementsByClassName("list-group-item");
Bg_green[2].style.backgroundColor = "green"; 

var boldElement = document.getElementsByClassName("list-group-item");
for(var i=0;i<boldElement.length;i++){
    boldElement[i].style.fontWeight = "bold";
}