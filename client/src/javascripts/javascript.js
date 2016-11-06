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
    <input type="text" class="form-control" id="input_itemCode" placeholder="Item Code" name='itemCode' required>
  </div>
  <div class="form-group">
  <label for="name_new">Item Name</label>
  <input type="text" class="form-control" id="input_name" placeholder="Item Name" name='name' required>
  </div>
  <div class="form-group">
  <label for="description_new">Description</label>
  <input type="text" class="form-control" id="input_description" placeholder="Description" name='description' required>
  </div>
  <div class="form-group">
  <label for="price_new">Price</label>
  <input type="text" class="form-control" id="input_price" placeholder="Price" name='price' required>
  </div>
  <div class="form-group">
  <label for="stock_new">Stock</label>
  <input type="text" class="form-control" id="input_stock" placeholder="Stock" name='stock' required>
  </div>
  <button type="submit" class="btn btn-primary" onclick='addItem()'>Submit</button>
  <div id='alert' style='display:none'><div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>
  </div>
</form></div>`
            document.getElementById('itempanel').className = "active"
            document.getElementById('customerpanel').className = ""
            document.getElementById('transactionpanel').className = ""

            document.getElementById('main-container').innerHTML = html
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}
function addItem() {
    let item_code = document.getElementById('input_itemCode').value
    let item_name = document.getElementById('input_name').value
    let item_desc = document.getElementById('input_description').value
    let item_price = document.getElementById('input_price').value
    let item_stock = document.getElementById('input_stock').value

    if (item_code != "" && item_name != "" && item_desc != "" && item_price != "" && item_stock != "") {
        // var query = "status="+document.getElementById('exampleTextarea').value
        var query = `itemCode=${item_code}&name=${item_name}&description=${item_desc}&price=${item_price}&stock=${item_stock}`
        console.log(query);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/api/item', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.onreadystatechange = function() {
            console.log(xhr);
            if (xhr.status === 200) {
                loadTableItem()
            } else {
                alert('New Item Added Successfully');
            }
        };
        xhr.send(query);
    } else {
        alert('Please Fill All Fields')
    }

}

function loadTableCustomer() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/customer');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            html = `<table class='table table-hover'>
            <thead>
            <tr>
            <td>Member ID
            </td>
            <td>Name
            </td>
            <td>Address
            </td>
            <td>ZIP
            </td>
            <td>Phone
            </td>
            <td>Action
            </td>
            </tr>
            </thead>
            <tbody>`
            for (var i = 0; i < data.length; i++) {
                html += `<tr id="rowCustomer${data[i]._id}"><td>${data[i].memberId}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].address}</td>
                        <td>${data[i].zip}</td>
                        <td>${data[i].phone}</td>
                        <td><span>
                            <button id="buttonEditCust${data[i]._id}" class="btn btn-warning" onclick="formEditCust('${data[i]._id}')">Edit</button>
                            <button id="buttonDeleteCust${data[i]._id}" class="btn btn-danger" onclick="deleteCust('${data[i]._id}')">Delete</button>
                        </span></td></tr>`
            }
            html += `</tbody></table>
            <div class="page-header">
              <h2>Add or Manage Customer</h2>
            </div><div class='container'>
            <form id='customerForm'>
  <div class="form-group">
    <label for="memberId_new">Member ID</label>
    <input type="text" class="form-control" id="input_memberId" placeholder="Member ID" name='memberId' required>
  </div>
  <div class="form-group">
  <label for="name_new">Customer Name</label>
  <input type="text" class="form-control" id="input_customerName" placeholder="Name" name='name' required>
  </div>
  <div class="form-group">
  <label for="address_new">Address</label>
  <input type="text" class="form-control" id="input_address" placeholder="Address" name='address' required>
  </div>
  <div class="form-group">
  <label for="zip_new">ZIP</label>
  <input type="text" class="form-control" id="input_zip" placeholder="ZIP" name='zip' required>
  </div>
  <div class="form-group">
  <label for="phone_new">Phone Number</label>
  <input type="text" class="form-control" id="input_phone" placeholder="Phone" name='phone' required>
  </div>
  <button type="submit" class="btn btn-success" onclick=addCustomer()>Submit</button>
</form></div>`
            document.getElementById('itempanel').className = ""
            document.getElementById('customerpanel').className = "active"
            document.getElementById('transactionpanel').className = ""

            document.getElementById('main-container').innerHTML = html
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}
function addCustomer() {
    let cust_id = document.getElementById('input_memberId').value
    let cust_name = document.getElementById('input_customerName').value
    let cust_address = document.getElementById('input_address').value
    let cust_zip = document.getElementById('input_zip').value
    let cust_phone = document.getElementById('input_phone').value

    if (cust_id != "" && cust_name != "" && cust_address != "" && cust_zip != "" && cust_phone != "") {
        var query = `memberId=${cust_id}&name=${cust_name}&address=${cust_address}&zip=${cust_zip}&phone=${cust_phone}`
        console.log(query);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/api/customer', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.onreadystatechange = function() {
            console.log(xhr);
            if (xhr.status === 200) {
                loadTableCustomer()
            } else {
                alert('New Customer Added Successfully');
            }
        };
        xhr.send(query);
    } else {
        alert('Please Fill All Fields')
    }

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
