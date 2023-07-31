// DOMcontentloaded explnation = is se html ka data load ho jata hai or jo bhi external files hoti hai vo iske bad load hoti hai website pr.
// jaise is case me api jo use ho rhi hai vo 24 hours bad expire ho jati hai to website load jb he hogi jb api run kregi qki ye external files hai islie DOM content loaded ka use kiya jata hai jis
// jis vjha se ye HTML data bina kisi dependency ke load kr ske

const CategoryID = document.querySelector(".Items-category");// select the Category items
const selectForm = document.getElementById('form');//Select the form

const Table1 = document.querySelector('.Table1');// select the first options value
const Table2 = document.querySelector('.Table2');//select the Second options value
const Table3 = document.querySelector('.Table3');//select the third options value


//whenever the page load we can call get request from crud crud and get the data and using for loop we can display into our website.
window.addEventListener('DOMContentLoaded', async () => {
    try{
        let response = await axios.get("https://crudcrud.com/api/f03c75fb83ac432288452e7884becf37/Data");
        console.log(response.data);
        for (var i = 0; i < response.data.length; i++) {
            displayAdminDetails(response.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
});


// Yesterday i mistakenly taking _id in Document.Createtextnode.
async function CreateAdminData(ChooseDish, ChoosePrice, ChooseTable , _id) {
    var li = document.createElement("li");
    li.className = "listItems";
    li.appendChild(document.createTextNode(ChooseDish + "-" +"₹"+ ChoosePrice + "-" + ChooseTable));
    li.style.fontSize = "Medium"

    var delBtn = document.createElement('button');
    delBtn.className = "Del btn btn-danger";
    delBtn.style.margin = "0.5rem"
    delBtn.style.fontSize = "15px"
    delBtn.appendChild(document.createTextNode('Delete Order'));
    delBtn.onclick = function () {
        deleteUserData(_id);
        li.remove();
    };
    li.appendChild(delBtn);
  

    // Determine the category section based on the selected category
    var TableSection;
    if (ChooseTable === 'Table 1') {
        TableSection = Table1;
    } else if (ChooseTable === 'Table 2') {
        TableSection = Table2;
    } else if (ChooseTable === 'Table 3') {
        TableSection = Table3;
    }

    TableSection.appendChild(li);
}

// ...

async function deleteUserData(userId) {
    try{
        let response = await axios.delete(`https://crudcrud.com/api/f03c75fb83ac432288452e7884becf37/Data/${userId}`)
        console.log(response)
    }
       
        catch(err){
            console.log(err);
        };
}

function displayAdminDetails(data) {
    // var ChooseDish = data;
    // var ChoosePrice = data;
    // var ChooseTable = data;
    // var _id = data;
    var { ChooseDish, ChoosePrice, ChooseTable, _id} = data; // instead of create each variable we can use data destruction and pass into data 
    console.log(data)
    var li = document.createElement("li");
    li.className = "listItems";
    li.id = _id;
    li.appendChild(document.createTextNode(ChooseDish + "--" +"₹"+ ChoosePrice + "--" + ChooseTable));
    li.style.fontSize = "Medium"

    var delBtn = document.createElement('button');
    delBtn.className = "Del btn btn-danger";
    delBtn.style.fontSize = "15px"
    delBtn.style.margin = "0.5rem"
    delBtn.appendChild(document.createTextNode('Delete Order'));
    delBtn.onclick = function () {
        deleteUserData(_id);
        li.remove();
    };
    li.appendChild(delBtn);

    //Now we pass the condition to store into category which we selected(If we select table 1 then data must be post into table1 section)
    if (ChooseTable === 'Table 1') {
        Table1.appendChild(li);
    } 
    else if (ChooseTable === 'Table 2') {
        Table2.appendChild(li);
    } 
    else if (ChooseTable === 'Table 3') {
        Table3.appendChild(li);
    }

    
}

// We add submit Event on selectForm, When we clicked on submit button we call CreateAdminData function and pass the data of variables and after it we clear the input field with the help of line number 119 and 120 
selectForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    var ChooseDish = document.getElementById('ChooseDish').value;
    var ChoosePrice = document.getElementById('ChoosePrice').value;
    var ChooseTable = document.getElementById('ChooseTable').value;

    CreateAdminData(ChooseDish, ChoosePrice, ChooseTable);

    document.getElementById('ChooseDish').value = '';
    document.getElementById('ChoosePrice').value = '';

    //using data Destructing store all the data into storage and pass storage into post api
    var storage = {
        ChooseDish,
        ChoosePrice,
        ChooseTable
    }

    try{
        let response = await axios.post("https://crudcrud.com/api/f03c75fb83ac432288452e7884becf37/Data", storage)
        console.log(response)
    }
        catch(err){
            console.log(err);
        };
});

