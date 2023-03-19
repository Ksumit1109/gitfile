var selectform = document.getElementById('form');
var selectInput = document.querySelectorAll('.Input');

selectform.addEventListener('submit' , items)
function items(e){
    e.preventDefault();
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Contact = document.getElementById('contact').value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(Name +'- '+ Email +'- '+ Contact))
    selectform.appendChild(li);


var storage = {
    Name,
    Email,
    Contact
}

var convertostring = JSON.stringify(storage);
localStorage.setItem(Name, convertostring)
var storeitems = localStorage.getItem(Name);
var converttoOBJ=JSON.parse(storeitems);
console.log(converttoOBJ.Name +'-'+ converttoOBJ.Email +'-'+ converttoOBJ.Contact);
}