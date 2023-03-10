// console.log("task2 of DOM")
// var title = document.getElementById("main-header");
// title.style.borderBottom ="solid 5px #000";
// var Element = document.querySelectorAll('h2')
// // console.log(Element[0])
// Element[0].style.color = "green";
// Element[0].style.fontWeight = "bold";

// Element.style.FontWeight = "bold"
// Element.style.color = "green"

// Task 4 
// var Bg_green = document.getElementsByClassName("list-group-item");
// Bg_green[2].style.backgroundColor = "green"; 

// var boldElement = document.getElementsByClassName("list-group-item");
// for(var i=0;i<boldElement.length;i++){
//     boldElement[i].style.fontWeight = "bold";
// }

// // Task 5
// var Edit = document.getElementsByClassName("task")
// Edit[0].style.fontWeight = "bold";

// var Edit2 = document.getElementsByTagName("li");
// console.log(Edit2)
// Edit2[4].style.backgroundColor = "grey";

// Task 6
// var listitem = document.querySelector('.list-group-item:nth-child(2)');
// listitem.style.backgroundColor = "green";

// var listitem2 = document.querySelector('.list-group-item:nth-child(3)');
// listitem2.style.display = "none";

// Task 7

var NewDiv = document.createElement('div');
NewDiv.className= 'NewClass';
NewDiv.id = 'NewId';
NewDiv.setAttribute('title', 'Hii Div')


var textNode = document.createTextNode('HEllo word');

NewDiv.appendChild(textNode);
var headercontainer = document.querySelector('header .container');
var headerH1 = document.querySelector('header h1');

headercontainer.insertBefore(NewDiv,headerH1);

// Question 2 
var NewDiv2 = document.createElement('li');
var textNode2 = document.createTextNode('HEllo word');
NewDiv2.appendChild(textNode2);
var Items = document.getElementById('items');
NewDiv2.className= "list-group-item";
NewDiv2.appendChild(textNode2);
Items.insertBefore(NewDiv2 , Items.childNodes[0])

console.log(NewDiv);

