const CategoryID = document.querySelector(".Items-category");
const selectForm = document.getElementById('form');

const electronicItems = document.querySelector('.electronic-items');
const foodItems = document.querySelector('.food-items');
console.log(foodItems)
const skinCareItems = document.querySelector('.skin-care-items');


window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/30712c9962a14e5da5d399e0e680813c/AdminData")
        .then((response) => {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                displayAdminDetails(response.data[i]);
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

// ...

function CreateAdminData(Product, Price, Category) {
    var li = document.createElement("li");
    li.className = "listItems";
    li.appendChild(document.createTextNode(Product + "-" + Price + "-" + Category));

    var delBtn = document.createElement('button');
    delBtn.className = "Del";
    delBtn.appendChild(document.createTextNode('Delete'));
    delBtn.onclick = function () {
        deleteUserData(Product);
        li.remove();
    };
    li.appendChild(delBtn);

    // Determine the category section based on the selected category
    var categorySection;
    if (Category === 'Electronic Items') {
        categorySection = electronicItems;
    } else if (Category === 'Food Items') {
        categorySection = foodItems;
    } else if (Category === 'Skin Care Items') {
        categorySection = skinCareItems;
    }

    categorySection.appendChild(li);
}

// ...

function deleteUserData(userId) {
    axios.delete(`https://crudcrud.com/api/30712c9962a14e5da5d399e0e680813c/AdminData/${userId}`)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}



function displayAdminDetails(data) {
    var { Product, Price, Category, _id } = data;
    var li = document.createElement("li");
    li.className = "listItems";
    li.id = _id;
    li.appendChild(document.createTextNode(Product + ' - ' + Price + ' - ' + Category));

    var delBtn = document.createElement('button');
    delBtn.className = "Del";
    delBtn.appendChild(document.createTextNode('Delete'));
    delBtn.onclick = function () {
        deleteUserData(_id);
        li.remove();
    };
    li.appendChild(delBtn);

    if (Category === 'Electronic Items') {
        electronicItems.appendChild(li);
    } 
    else if (Category === 'Food Items') {
        foodItems.appendChild(li);
    } 
    else if (Category === 'Skin Care Items') {
        skinCareItems.appendChild(li);
    }
}

// ...

selectForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var Product = document.getElementById('Product').value;
    var Price = document.getElementById('Price').value;
    var Category = document.getElementById('Category').value;

    CreateAdminData(Product, Price, Category);

    var storage = {
        Product,
        Price,
        Category
    };

    axios.post("https://crudcrud.com/api/30712c9962a14e5da5d399e0e680813c/AdminData", storage)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
});

