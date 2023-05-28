window.addEventListener('DOMContentLoaded', function () {
    axios.get("https://crudcrud.com/api/b838b352eea945f3b5ba2e5de9d1d480/userdata")
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
  
  function deleteUserData(user) {
    axios.get(`https://crudcrud.com/api/b838b352eea945f3b5ba2e5de9d1d480/userdata?email=${user}`)
      .then((response) => {
        const id = response.data[0]._id;
        axios.delete(`https://crudcrud.com/api/b838b352eea945f3b5ba2e5de9d1d480/userdata/${id}`)
          .then(() => {
            console.log("User detail deleted successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function editUserDetail(Name, Email, Contact, listItem) {
    localStorage.removeItem(Email);
    document.getElementById('name').value = Name;
    document.getElementById('email').value = Email;
    document.getElementById('contact').value = Contact;
    list22.removeChild(listItem);
  }
  
  function displayUserDetails(data) {
    var { Name, Email, Contact } = data;
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
  
    axios.post("https://crudcrud.com/api/b838b352eea945f3b5ba2e5de9d1d480/userdata", storage)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  
    var convertToString = JSON.stringify(storage);
    localStorage.setItem(Email, convertToString);
   });
  