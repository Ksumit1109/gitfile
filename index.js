// // console.log("task2 of DOM")
// // var title = document.getElementById("main-header");
// // title.style.borderBottom ="solid 5px #000";
// // var Element = document.querySelectorAll('h2')
// // // console.log(Element[0])
// // Element[0].style.color = "green";
// // Element[0].style.fontWeight = "bold";

// // Element.style.FontWeight = "bold"
// // Element.style.color = "green"

// // Task 4 
// // var Bg_green = document.getElementsByClassName("list-group-item");
// // Bg_green[2].style.backgroundColor = "green"; 

// // var boldElement = document.getElementsByClassName("list-group-item");
// // for(var i=0;i<boldElement.length;i++){
// //     boldElement[i].style.fontWeight = "bold";
// // }

// // // Task 5
// // var Edit = document.getElementsByClassName("task")
// // Edit[0].style.fontWeight = "bold";

// // var Edit2 = document.getElementsByTagName("li");
// // console.log(Edit2)
// // Edit2[4].style.backgroundColor = "grey";

// // Task 6
// // var listitem = document.querySelector('.list-group-item:nth-child(2)');
// // listitem.style.backgroundColor = "green";

// // var listitem2 = document.querySelector('.list-group-item:nth-child(3)');
// // listitem2.style.display = "none";

// // Task 7

// // var NewDiv = document.createElement('div');
// // NewDiv.className= 'NewClass';
// // NewDiv.id = 'NewId';
// // NewDiv.setAttribute('title', 'Hii Div')


// // var textNode = document.createTextNode('HEllo word');

// // NewDiv.appendChild(textNode);
// // var headercontainer = document.querySelector('header .container');
// // var headerH1 = document.querySelector('header h1');

// // headercontainer.insertBefore(NewDiv,headerH1);

// // // Question 2 
// // var NewDiv2 = document.createElement('li');
// // var textNode2 = document.createTextNode('HEllo word');
// // NewDiv2.appendChild(textNode2);
// // var Items = document.getElementById('items');
// // NewDiv2.className= "list-group-item";
// // NewDiv2.appendChild(textNode2);
// // Items.insertBefore(NewDiv2 , Items.childNodes[0])

// // console.log(NewDiv);

// Task 8
var SelectForm = document.getElementById('addForm');
var SelectItem = document.getElementById('items');
var filter = document.getElementById('filter');

SelectForm.addEventListener('submit', additem);
SelectItem.addEventListener('click', removeitem);
filter.addEventListener('keyup', filterItems);



// Add Edit button to existing items when page is loaded
var existingItems = SelectItem.querySelectorAll('li');
for (var i = 0; i < existingItems.length; i++) {
  var Editbtn = document.createElement('button');
  Editbtn.className = 'btn btn-info btn-sm float-right edit mr-2';
  Editbtn.appendChild(document.createTextNode('Edit'));
  existingItems[i].appendChild(Editbtn);
}

function additem(e) {
  e.preventDefault();
  var NewItem = document.getElementById('item').value;
  var newItem2 =document.getElementById('Des').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(NewItem + " " + newItem2));
  SelectItem.appendChild(li);

  

  var Delbtn = document.createElement('button');
  Delbtn.className = 'btn btn-danger btn-sm float-right delete';
  Delbtn.appendChild(document.createTextNode('X'));
  li.appendChild(Delbtn);

  var Editbtn = document.createElement('button');
  Editbtn.className = 'btn btn-info btn-sm float-right edit mr-2';
  Editbtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(Editbtn);



// // Task 10
localStorage.setItem('itemDetails1',NewItem + ' '+ newItem2)
localStorage.setItem('itemDetails2',newItem2)
console.log(localStorage.getItem('itemDetails1'));
console.log(localStorage.getItem('itemDetails2'));

//console.log(first , second);


// Task 11  
// var localStorage01={
//   item : NewItem,
//   item2: newItem2
// }

// var ConvertToString = JSON.stringify(localStorage01);
// // console.log(ConvertToString);

// localStorage.setItem('UserDetails', ConvertToString);
// // console.log(localStorage);

// var StoreItem=localStorage.getItem('UserDetails');
// var converttoOBJ=JSON.parse(StoreItem);
// console.log(converttoOBJ.item +' '+ converttoOBJ.item2 );
}

function filterItems(e){
  var text = e.target.value.toLowerCase();
  var item = SelectItem.getElementsByTagName('li');
  Array.from(item).forEach(function(items){
    var itemname = items.firstChild.textContent;
    if(itemname.toLowerCase().indexOf(text) != -1){
      items.style.display = 'block'
    }
    else{
      items.style.display = 'none'
    }
  })
}

function removeitem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      SelectItem.removeChild(li);
      localStorage.removeItem('UserDetails')
    }
  }
}

// Task 9
var Input = document.createElement('input');
Input.type = "text";
Input.className = "form-control mr-2";
Input.id = "Des"
SelectForm.appendChild(Input);
const existingInput = SelectForm.querySelector('#item');
// insert the new input element before the existing input element
SelectForm.insertBefore(Input, existingInput.nextSibling);


// task 10
