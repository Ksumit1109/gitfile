var selectform = document.getElementById('form');
var list22 = document.getElementById('items1')
var selectInput = document.querySelectorAll('.Input');
selectform.addEventListener('submit' , items)
list22.addEventListener('click' , DeleteLi)

function items(e){
    e.preventDefault();
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Contact = document.getElementById('contact').value;
    var li = document.createElement("li");
    li.className = "listItems"
    li.appendChild(document.createTextNode(Name +'- '+ Email +'- '+ Contact))
    list22.appendChild(li);

    // DELETE THE LI TAG
    var delBtn = document.createElement('button')
    delBtn.className = "Del";
    delBtn.appendChild(document.createTextNode('Remove'))
    li.appendChild(delBtn);
var storage = {
    Name,
    Email,
    Contact
}

var convertostring = JSON.stringify(storage);
localStorage.setItem("Name", convertostring)
var storeitems = localStorage.getItem("Name");
var converttoOBJ=JSON.parse(storeitems);
console.log(converttoOBJ.Name +'-'+ converttoOBJ.Email +'-'+ converttoOBJ.Contact);
}

function DeleteLi(e){
    if(e.target.classList.contains('Del')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            list22.removeChild(li);
            localStorage.removeItem("Name");
        }
    }
}