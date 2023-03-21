var selectform = document.getElementById('form');
var list22 = document.getElementById('items1')
var selectInput = document.querySelectorAll('.Input');
selectform.addEventListener('submit' , items);

function items(e){
    e.preventDefault();
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Contact = document.getElementById('contact').value;
    var li = document.createElement("li");
    li.className = "listItems"
    li.appendChild(document.createTextNode(Name +'- '+ Email +'- '+ Contact))
    list22.appendChild(li);

    // CREATE DELETE BUTTON
    var delBtn = document.createElement('button')
    delBtn.className = "Del";
    delBtn.appendChild(document.createTextNode('Delete'))
    li.appendChild(delBtn);
    delBtn.onclick = () =>{
        localStorage.removeItem(storage.Email)
        list22.removeChild(li);
    }
    li.appendChild(delBtn);
    list22.appendChild(li)

    // CREATE EDIT BUTTON
    var editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('Edit'))
    editBtn.style.margin = '4px'
    li.appendChild(editBtn);

    editBtn.onclick= () =>{
        localStorage.removeItem(storage.Email);
        document.getElementById('name').value = storage.Name;
        document.getElementById('email').value = storage.Email;
        document.getElementById('contact').value = storage.Contact;
        list22.removeChild(li);
    }
    list22.appendChild(li);

    
    var storage={
        Name,
        Email,
        Contact
    }
    

var convertostring = JSON.stringify(storage);
localStorage.setItem( storage.Email,convertostring)
var storeitems = localStorage.getItem(storage.Email);
var converttoOBJ=JSON.parse(storeitems);
console.log(converttoOBJ.Name +'-'+ converttoOBJ.Email +'-'+ converttoOBJ.Contact);
}


