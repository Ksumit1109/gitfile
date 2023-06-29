window.addEventListener('DOMContentLoaded', ()=> {
  axios.get("https://crudcrud.com/api/ba366fa5c67c441b81891d7980aa8e0d/userdata")
    .then((response) => {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        displayUserDetails(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

var list22 = document.getElementById('items1');

function createUserDetail(Name, Email, Contact) {
  var li = document.createElement("li");
  li.className = "listItems";
  li.appendChild(document.createTextNode(Name + ' - ' + Email + ' - ' + Contact));

  // CREATE DELETE BUTTON
  var delBtn = document.createElement('button');
  delBtn.className = "Del";
  delBtn.appendChild(document.createTextNode('Delete'));
  delBtn.onclick = function () {
    deleteUserData(Email);
    list22.removeChild(li);
  };
  li.appendChild(delBtn);

  // CREATE EDIT BUTTON
  var editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  editBtn.style.margin = '4px';
  editBtn.onclick = function () {
    editUserDetail(Name, Email, Contact, li);
  };
  li.appendChild(editBtn);

  list22.appendChild(li);
}

function deleteUserData(userId) {
  axios.delete(`https://crudcrud.com/api/ba366fa5c67c441b81891d7980aa8e0d/userdata/${userId}`)
    .then((response) => {
      removeUserFromScreen(userId);
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeUserFromScreen(userId) {
  const listItem = document.getElementById(userId);
  if (listItem) {
    listItem.remove();
  }
}

function editUserDetail(Name, Email, Contact, listItem,userId) {
  document.getElementById('name').value = Name;
  document.getElementById('email').value = Email;
  document.getElementById('contact').value = Contact;
  deleteUserData(userId)
  list22.removeChild(listItem);
}

function displayUserDetails(data) {
  var { Name, Email, Contact, _id } = data; // Added _id variable
  var li = document.createElement("li");
  li.className = "listItems";
  li.id = _id; // Set the id attribute to _id

  li.appendChild(document.createTextNode(Name + ' - ' + Email + ' - ' + Contact));

  // CREATE DELETE BUTTON
  var delBtn = document.createElement('button');
  delBtn.className = "Del";
  delBtn.appendChild(document.createTextNode('Delete'));
  delBtn.onclick = function () {
    deleteUserData(_id);
    list22.removeChild(li);
  };
  li.appendChild(delBtn);

  // CREATE EDIT BUTTON
  var editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  editBtn.style.margin = '4px';
  editBtn.onclick = function () {
    editUserDetail(Name, Email, Contact, li, _id);
  };
  li.appendChild(editBtn);

  list22.appendChild(li);
}


var selectform = document.getElementById('form');
selectform.addEventListener('submit', function (e) {
  e.preventDefault();
  var Name = document.getElementById('name').value;
  var Email = document.getElementById('email').value;
  var Contact = document.getElementById('contact').value;

  createUserDetail(Name, Email, Contact);

  var storage = {
    Name,
    Email,
    Contact
  };

  axios.post("https://crudcrud.com/api/ba366fa5c67c441b81891d7980aa8e0d/userdata", storage)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  var convertToString = JSON.stringify(storage);
  localStorage.setItem(Email, convertToString);
 });