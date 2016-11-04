function loadTableItem() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/item');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            html = '<h2>Item List</h2>'
            for (var i = 0; i < data.length; i++) {
                html += `<div class="panel panel-success"><div class="panel-heading"><h3> ${data[i].itemCode} - ${data[i].name}</h3><div class="clearfix"></div></div><div class="panel-body"> <div class='well well-sm'><strong>${data[i].description}</strong></div><div class='well well-sm'>Price : ${data[i].price}</div>
              <div class='well well-sm'>Stock : ${data[i].stock}</div>
              <button id='upd${data[i]._id}' data-id='${data[i]._id}' class='btn btn-warning' role='button' onclick='return formEditItem(this)'>Update</button>
              <button id='del${data[i]._id}' data-id='${data[i]._id}' class='btn btn-danger' role='button' onclick='return formEditItem(this)'>Delete</button>
              <div id='${data[i]._id}'  hidden>
              </div></div></div>`
            }
            document.getElementById('itempanel').className = "active"
            document.getElementById('customerpanel').className = ""
            document.getElementById('transactionpanel').className = ""

            document.getElementById('list').innerHTML = html
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
            html = '<h2>Customer List</h2>'
            for (var i = 0; i < data.length; i++) {
                html += `<div class="panel panel-primary"><div class="panel-heading"><h3> ${data[i].memberId} - ${data[i].name}</h3><div class="clearfix"></div></div><div class="panel-body"><div class='well well-sm'> Address : ${data[i].address}</div><div class='well well-sm'>ZIP : ${data[i].zip}</div>
              <div class='well well-sm'>Phone : ${data[i].phone}</div>
<button id='upd${data[i]._id}' data-id='${data[i]._id}' class='btn btn-warning' role='button' onclick='return formEditItem(this)'>Update</button>
<button id='del${data[i]._id}' data-id='${data[i]._id}' class='btn btn-danger' role='button' onclick='return formEditItem(this)'>Delete</button>
              <div id='${data[i]._id}' data-id='${data[i]._id}' hidden></div></div></div>`
            }
            document.getElementById('itempanel').className = ""
            document.getElementById('customerpanel').className = "active"
            document.getElementById('transactionpanel').className = ""

            document.getElementById('list').innerHTML = html
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
