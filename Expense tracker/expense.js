let expensetrackerform = document.getElementById('form');
let selectinput = document.getElementsByClassName('input');
let selectlist = document.getElementById('list-of-items');
expensetrackerform.addEventListener('submit', items);

function items(e){
    e.preventDefault();
    let expenseamt = document.getElementById('Expenseamount').value;
    let description = document.getElementById('Description').value;
    let Category = document.getElementById('Category').value;
    let li = document.createElement('li');
    li.className = 'listItems';
    li.appendChild(document.createTextNode(expenseamt +"-" + description +'-'+ Category));
    selectlist.appendChild(li);


let deleteButton = document.createElement('button');
deleteButton.className = 'Delete btn-sm btn btn-outline-danger';
deleteButton.style.margin= "0.2rem"
deleteButton.appendChild(document.createTextNode('Delete'));
li.appendChild(deleteButton);
deleteButton.onclick=()=>{
    localStorage.removeItem(Storage.description);
    selectlist.removeChild(li);
}
li.appendChild(deleteButton)
selectlist.appendChild(li);

let Editbtn = document.createElement('button');
Editbtn.className = "Edit btn btn-outline-warning"
Editbtn.appendChild(document.createTextNode('Edit'));
Editbtn.style.margin = '4px'
li.appendChild(Editbtn);
Editbtn.onclick=(e)=>{
    localStorage.removeItem(Storage.description);
    document.getElementById('Expenseamount').value = Storage.expenseamt;
    document.getElementById('Description').value = Storage.description;
    document.getElementById('Category').value = Storage.Category;
    selectlist.removeChild(li);
}
li.appendChild(Editbtn);
selectlist.appendChild(li);


let Storage={
    expenseamt,
    description,
    Category
}
let ConvertToString = JSON.stringify(Storage);
localStorage.setItem(Storage.description,ConvertToString)
let StoreItem = localStorage.getItem(Storage.description)
let ConvertToObj = JSON.parse(StoreItem)
console.log(ConvertToObj.expenseamt +'-'+ConvertToObj.description+'-'+ConvertToObj.Category);
}