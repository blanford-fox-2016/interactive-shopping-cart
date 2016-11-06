function loadTableItem() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/item');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            html = `<table class='table table-hover'>
            <thead>
            <tr>
            <td>Item Code
            </td>
            <td>Name
            </td>
            <td>Description
            </td>
            <td>Price
            </td>
            <td>Stock
            </td>
            <td>Action
            </td>
            </tr>
            </thead>
            <tbody>`
            for (var i = 0; i < data.length; i++) {
                html += `<tr id="rowItem${data[i]._id}"><td>${data[i].itemCode}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].description}</td>
                        <td>${data[i].price}</td>
                        <td>${data[i].stock}</td>
                        <td><span>
                            <button id="buttonEditItem${data[i]._id}" class="btn btn-warning" onclick="formEditItem('${data[i]._id}')">Edit</button>
                            <button id="buttonDeleteItem${data[i]._id}" class="btn btn-danger" onclick="deleteItem('${data[i]._id}')">Delete</button>
                        </span></td></tr>`
            }
            html += `</tbody></table>
            <div class="page-header">
              <h2>Add or Manage Item</h2>
            </div><div class='container'>
            <form id='itemForm'>
  <div class="form-group">
    <label for="itemCode_new">Item Code</label>
    <input type="text" class="form-control" id="input_itemCode" placeholder="Item Code" name='itemCode'>
  </div>
  <div class="form-group">
  <label for="name_new">Item Name</label>
  <input type="text" class="form-control" id="input_name" placeholder="Item Name" name='name'>
  </div>
  <div class="form-group">
  <label for="description_new">Description</label>
  <input type="text" class="form-control" id="input_description" placeholder="Description" name='description'>
  </div>
  <div class="form-group">
  <label for="price_new">Price</label>
  <input type="text" class="form-control" id="input_price" placeholder="Price" name='price'>
  </div>
  <div class="form-group">
  <label for="stock_new">Stock</label>
  <input type="text" class="form-control" id="input_stock" placeholder="Stock" name='stock'>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form></div>`
            document.getElementById('itempanel').className = "active"
            document.getElementById('customerpanel').className = ""
            document.getElementById('transactionpanel').className = ""

            document.getElementById('table-item').innerHTML = html
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

function loadTableCustomer() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/customer');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            html = `<thead>
            <tr>
            <td>Item Code
            </td>
            <td>Name
            </td>
            <td>Description
            </td>
            <td>Price
            </td>
            <td>Stock
            </td>
            <td>Action
            </td>
            </tr>
            </thead>
            <tbody>`
            for (var i = 0; i < data.length; i++) {
                html += `<tr id="rowItem${data[i]._id}"><td>${data[i]._itemCode}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].description}</td>
                        <td>${data[i].price}</td>
                        <td>${data[i].stock}</td>
                        <td><span>
                            <button id="buttonEditItem${data[i]._id}" class="btn btn-warning" onclick="formEditItem('${data[i]._id}')">Edit</button>
                            <button id="buttonDeleteItem${data[i]._id}" class="btn btn-danger" onclick="deleteItem('${data[i]._id}')">Delete</button>
                        </span></td></tr>`
            }
            html += `</tbody>`
            document.getElementById('itempanel').className = ""
            document.getElementById('customerpanel').className = "active"
            document.getElementById('transactionpanel').className = ""

            document.getElementById('table-item').innerHTML = html
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

function formEditItem(parameter) {
    var targetItem = document.getElementById(parameter)
    var itemId = targetItem.getAttribute('data-id')
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/api/item/${itemId}`);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            html = '<h2>Form update</h2>'
            console.log(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();

}
