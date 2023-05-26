
window.addEventListener('DOMContentLoaded', function () {
    axios.get("https://crudcrud.com/api/36cd35ff531e405aa90635740ce0bcf8/userdata")
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
  
  var selectform = document.getElementById('form');
  var list22 = document.getElementById('items1');
  selectform.addEventListener('submit', items);
  
  function items(e) {
    e.preventDefault();
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Contact = document.getElementById('contact').value;
    var li = document.createElement("li");
    li.className = "listItems";
    li.appendChild(document.createTextNode(Name + ' - ' + Email + ' - ' + Contact));
    list22.appendChild(li);
  
    // CREATE DELETE BUTTON
    var delBtn = document.createElement('button');
    delBtn.className = "Del";
    delBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(delBtn);
    delBtn.onclick = () => {
      localStorage.removeItem(Email);
      list22.removeChild(li);
    };
    li.appendChild(delBtn);
    list22.appendChild(li);
  
    // CREATE EDIT BUTTON
    var editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.style.margin = '4px';
    li.appendChild(editBtn);
  
    editBtn.onclick = () => {
      localStorage.removeItem(Email);
      document.getElementById('name').value = Name;
      document.getElementById('email').value = Email;
      document.getElementById('contact').value = Contact;
      list22.removeChild(li);
    };
    list22.appendChild(li);
  
    var storage = {
      Name,
      Email,
      Contact
    };
  
    axios.post("https://crudcrud.com/api/36cd35ff531e405aa90635740ce0bcf8/userdata", storage)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  
    var convertToString = JSON.stringify(storage);
    localStorage.setItem(Email, convertToString);
  }
  function displayUserDetails(data) {
    var li = document.createElement("li");
    li.className = "listItems";
    li.appendChild(document.createTextNode(data.Name + ' - ' + data.Email + ' - ' + data.Contact));
    list22.appendChild(li);

    var delBtn = document.createElement('button');
    delBtn.className = "Del";
    delBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(delBtn);
    delBtn.onclick = () => {
      localStorage.removeItem(Email);
      list22.removeChild(li);
    };
    li.appendChild(delBtn);
    list22.appendChild(li);
  
    // CREATE EDIT BUTTON
    var editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.style.margin = '4px';
    li.appendChild(editBtn);
  
    editBtn.onclick = () => {
      localStorage.removeItem(Email);
      document.getElementById('name').value = Name;
      document.getElementById('email').value = Email;
      document.getElementById('contact').value = Contact;
      list22.removeChild(li);
    };
    list22.appendChild(li);

  }
