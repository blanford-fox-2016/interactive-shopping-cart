$(document).ready(function() {
  //NEW DATA ITEM
  $("#submitItem").click(function() {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/item",
      data: {
        itemCode: $("#ItemCode").val(),
        name: $("#ItemName").val(),
        description: $("#ItemDescription").val(),
        price: $("#ItemPrice").val(),
        stock: $("#ItemStock").val()
      },
      dataType: "json",
      success: function appendnew(data) {
        var newHTML = '';
        newHTML += `<div class="col-sm-6 col-md-4" id="item${data._id}">
          <div class="thumbnail">
            <div class="caption">
              <h3>${data.name}</h3>
              <p>${data.description}</p>
              <p class="text-center">
              <button type="button" class="btn btn-primary" role="button"  data-toggle="modal" data-target="#detailmodal${data._id}">
                <i class="glyphicon glyphicon-eye-open"></i> Detail
              </button>
              <a href="#" class="btn btn-success" role="button">
                <i class="glyphicon glyphicon-edit"></i> Edit
              </a>
              <button type="button" class="btn btn-danger" role="button"  data-toggle="modal" data-target="#deletemodal${data._id}">
                <i class="glyphicon glyphicon-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="deletemodal${data._id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Delete Item</h4>
              </div>
              <div class="modal-body">
                Are you sure want to delete this item (${data.name})?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" onclick="deleteItem('${data._id}')">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="detailmodal${data._id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Detail Item ${data.itemCode}</h4>
              </div>
              <div class="modal-body">
                  <p>Item Code : ${data.itemCode}</p>
                  <p>Name : ${data.name}</p>
                  <p>description: ${data.description}</p>
                  <p>Price : ${data.price}</p>
                  <p>Stock : ${data.stock}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Edit</button>
              </div>
            </div>
          </div>
        </div>
        `;
        $( '#inputItem' ).each(function(){
            this.reset();
        });
        $("#items").append(newHTML);
      }
    });
  });

  //GET ALL DATA ITEM
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/item",
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded',
    success: function(data) {
      var dataHTML = '';
      for (var i = 0; i < data.length; i++) {
        dataHTML += `<div class="col-sm-6 col-md-4" id="item${data[i]._id}">
          <div class="thumbnail">
            <div class="caption">
              <h3>${data[i].name}</h3>
              <p>${data[i].description}</p>
              <p class="text-center">
                <button type="button" class="btn btn-primary" role="button"  data-toggle="modal" data-target="#detailmodal${data[i]._id}">
                  <i class="glyphicon glyphicon-eye-open"></i> Detail
                </button>
                <button type="button" class="btn btn-danger" role="button"  data-toggle="modal" data-target="#deletemodal${data[i]._id}">
                  <i class="glyphicon glyphicon-trash"></i> Delete
                </button>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="deletemodal${data[i]._id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Delete Item</h4>
              </div>
              <div class="modal-body">
                Are you sure want to delete this item (${data[i].name})?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" onclick="deleteItem('${data[i]._id}')">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="detailmodal${data[i]._id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Detail Item ${data[i].itemCode}</h4>
              </div>
              <div class="modal-body">
                <form class = col-md-12 id="detailItem${data[i]._id}">
                  <div class="form-group">
                    <label class="control-label" for="detItemCode">ItemCode : </label>
                    <div id="detItemCode${data[i]._id}">${data[i].itemCode}</div>
                    <label class="control-label" for="detItemName">Name : </label>
                    <div id="detItemName${data[i]._id}">${data[i].name}</div>
                    <label class="control-label" for="detItemDesc">Description : </label>
                    <div id="detItemDesc${data[i]._id}">${data[i].description}</div>
                    <label class="control-label" for="detItemPrice">Price : </label>
                    <div id="detItemPrice${data[i]._id}">${data[i].price}</div>
                    <label class="control-label" for="detItemStock">ItemCode : </label>
                    <div id="detItemStock${data[i]._id}">${data[i].stock}</div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <span id="editbtn${data[i]._id}">
                  <button type="button" class="btn btn-success" onclick=editItem('${data[i]._id}')>Edit</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        `
      }
      $("#items").append(dataHTML);
    }
  })

})

function editItem(id) {
  var code = document.getElementById('detItemCode'+id).innerHTML;
  var name = document.getElementById('detItemName'+id).innerHTML;
  var desc = document.getElementById('detItemDesc'+id).innerHTML;
  var price = document.getElementById('detItemPrice'+id).innerHTML;
  var stock = document.getElementById('detItemStock'+id).innerHTML;
  document.getElementById('detItemCode'+id).innerHTML = `<input class="form-control" id="ItemCode${id}" type="text" value="${code}">`;
  document.getElementById('detItemName'+id).innerHTML = `<input class="form-control" id="ItemName${id}" type="text" value="${name}">`;
  document.getElementById('detItemDesc'+id).innerHTML = `<textarea class="form-control" id="ItemDesc${id}">${desc}</textarea>`;
  document.getElementById('detItemPrice'+id).innerHTML = `<input class="form-control" id="ItemPrice${id}" type="number" value="${price}">`;
  document.getElementById('detItemStock'+id).innerHTML = `<input class="form-control" id="ItemStock${id}" type="number" value="${stock}">`;
  document.getElementById('editbtn'+id).innerHTML = `<button type="button" class="btn btn-success" onclick=updateItem('${id}') data-dismiss="modal">Save</button>`;
}

function updateItem(id) {
  $.ajax({
    url: "http://localhost:3000/api/item/"+id,
    method: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    data : {
      _id : id,
      itemCode : $('#ItemCode'+id).val(),
      name : $('#ItemName'+id).val(),
      description : $('#ItemDesc'+id).val(),
      price : $('#ItemPrice'+id).val(),
      stock : $('#ItemStock'+id).val()
    },
    success: function(editedData) {
      console.log(editedData);
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/api/item/"+id,
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded',
        success: function(data) {
          console.log(data);
          var newDataItem = `<div class="col-sm-6 col-md-4" id="item${data._id}">
            <div class="thumbnail">
              <div class="caption">
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                <p class="text-center">
                  <button type="button" class="btn btn-primary" role="button"  data-toggle="modal" data-target="#detailmodal${data._id}">
                    <i class="glyphicon glyphicon-eye-open"></i> Detail
                  </button>
                  <button type="button" class="btn btn-danger" role="button"  data-toggle="modal" data-target="#deletemodal${data._id}">
                    <i class="glyphicon glyphicon-trash"></i> Delete
                  </button>
              </div>
            </div>
          </div>`;

          var newDetailItem = `<form class = col-md-12 id="detailItem${data._id}">
            <div class="form-group">
              <label class="control-label" for="detItemCode">ItemCode : </label>
              <div id="detItemCode${data._id}">${data.itemCode}</div>
              <label class="control-label" for="detItemName">Name : </label>
              <div id="detItemName${data._id}">${data.name}</div>
              <label class="control-label" for="detItemDesc">Description : </label>
              <div id="detItemDesc${data._id}">${data.description}</div>
              <label class="control-label" for="detItemPrice">Price : </label>
              <div id="detItemPrice${data._id}">${data.price}</div>
              <label class="control-label" for="detItemStock">ItemCode : </label>
              <div id="detItemStock${data._id}">${data.stock}</div>
            </div>
          </form>`;

          $(`#item${id}`).replaceWith(newDataItem);
          $(`#detailItem${id}`).replaceWith(newDetailItem);
        }
      })
    }
  })
}


function deleteItem(id) {
  $.ajax({
    url         : 'http://localhost:3000/api/item/'+id,
    type        : 'DELETE',
    dataType    : 'json',
    contentType : 'application/x-www-form-urlencoded',
    success     : function() {
      $(`#item${id}`).remove();
      $(`#detailmodal${id}`).remove();
      $(`#deletemodal${id}`).remove();
      $(`.modal-backdrop.fade.in`).remove();
    }
  })

}
