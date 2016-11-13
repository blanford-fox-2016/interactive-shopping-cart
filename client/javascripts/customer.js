$(document).ready(function() {
  //GET ALL DATA ITEM
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/customer",
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded',
    success: function(data) {
      var dataHTML = '';
      for (var i = 0; i < data.length; i++) {
        dataHTML += `<div class="col-sm-6 col-md-4" id="customer${data[i]._id}">
          <div class="thumbnail">
            <div class="caption">
              <h3>${data[i].memberId}</h3>
              <p>${data[i].name}</p>
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
                <h4 class="modal-title" id="myModalLabel">Delete Customer ${data.memberId}</h4>
              </div>
              <div class="modal-body">
                Are you sure want to delete this customer (${data[i].name})?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" onclick="deleteCustomer('${data[i]._id}')">Delete</button>
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
                <h4 class="modal-title" id="myModalLabel">Detail Item ${data[i].memberId}</h4>
              </div>
              <div class="modal-body">
                <form class = col-md-12 id="detailCustomer${data[i]._id}">
                  <div class="form-group">
                    <label class="control-label" for="detItemCode">ItemCode : </label>
                    <div id="detCustomerMemberID${data[i]._id}">${data[i].memberId}</div>
                    <label class="control-label" for="detItemName">Name : </label>
                    <div id="detCustomerName${data[i]._id}">${data[i].name}</div>
                    <label class="control-label" for="detItemDesc">Description : </label>
                    <div id="detCustomerAddress${data[i]._id}">${data[i].address}</div>
                    <label class="control-label" for="detItemPrice">Price : </label>
                    <div id="detCustomerPhone${data[i]._id}">${data[i].phone}</div>
                    <label class="control-label" for="detItemStock">ItemCode : </label>
                    <div id="detCustomerZIP${data[i]._id}">${data[i].zip}</div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <span id="editbtn${data[i]._id}">
                  <button type="button" class="btn btn-success" onclick=editCustomer('${data[i]._id}')>Edit</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        `
      }
      $("#customers").append(dataHTML);
    }
  })

})

function submitCustomer() {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/customer",
    data: {
      name: $('#customerName').val(),
      memberId: $('#customerMemberID').val(),
      address: $('#customerAddress').val(),
      zip: $('#customerZip').val(),
      phone: $('#customerPhone').val()
    },
    dataType: "json",
    success: function appendnew(data) {
      var newHTML = '';
      newHTML += `<div class="col-sm-6 col-md-4" id="customer${data._id}">
        <div class="thumbnail">
          <div class="caption">
            <h3>${data.memberId}</h3>
            <p>${data.name}</p>
            <p class="text-center">
            <button type="button" class="btn btn-primary" role="button"  data-toggle="modal" data-target="#detailmodal${data._id}">
              <i class="glyphicon glyphicon-eye-open"></i> Detail
            </button>
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
              <h4 class="modal-title" id="myModalLabel">Delete Customer ${data.memberId}</h4>
            </div>
            <div class="modal-body">
              Are you sure want to delete this customer (${data.name})?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger" onclick="deleteCustomer('${data._id}')">Delete</button>
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
              <h4 class="modal-title" id="myModalLabel">Detail Customer ${data.memberId}</h4>
            </div>
            <div class="modal-body">
              <form class = col-md-12 id="detailCustomer${data._id}">
                <div class="form-group">
                  <label class="control-label" for="detItemCode">ItemCode : </label>
                  <div id="detCustomerMemberID${data._id}">${data.memberId}</div>
                  <label class="control-label" for="detItemName">Name : </label>
                  <div id="detCustomerName${data._id}">${data.name}</div>
                  <label class="control-label" for="detItemDesc">Description : </label>
                  <div id="detCustomerAddress${data._id}">${data.address}</div>
                  <label class="control-label" for="detItemPrice">Price : </label>
                  <div id="detCustomerPhone${data._id}">${data.phone}</div>
                  <label class="control-label" for="detItemStock">ItemCode : </label>
                  <div id="detCustomerZIP${data._id}">${data.zip}</div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <span id="editbtn${data[i]._id}">
                <button type="button" class="btn btn-success" onclick=editCustomer('${data[i]._id}')>Edit</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      `;
      $( '#inputCustomer' ).each(function(){
          this.reset();
      });
      $("#customers").append(newHTML);
    }
  });
};

function editCustomer(id) {
  var memberId = document.getElementById('detCustomerMemberID'+id).innerHTML;
  var name = document.getElementById('detCustomerName'+id).innerHTML;
  var address = document.getElementById('detCustomerAddress'+id).innerHTML;
  var phone = document.getElementById('detCustomerPhone'+id).innerHTML;
  var zip = document.getElementById('detCustomerZIP'+id).innerHTML;
  document.getElementById('detCustomerMemberID'+id).innerHTML = `<input class="form-control" id="customerMemberID${id}" type="text" value="${memberId}">`;
  document.getElementById('detCustomerName'+id).innerHTML = `<input class="form-control" id="customerName${id}" type="text" value="${name}">`;
  document.getElementById('detCustomerAddress'+id).innerHTML = `<textarea class="form-control" id="ItemDesc${id}">${address}</textarea>`;
  document.getElementById('detCustomerPhone'+id).innerHTML = `<input class="form-control" id="customerPhone${id}" type="text" value="${phone}">`;
  document.getElementById('detCustomerZIP'+id).innerHTML = `<input class="form-control" id="customerZip${id}" type="text" value="${zip}">`;
  document.getElementById('editbtn'+id).innerHTML = `<button type="button" class="btn btn-success" onclick=updateCustomer('${id}') data-dismiss="modal">Save</button>`;
}

function deleteCustomer(id) {
  $.ajax({
    url         : 'http://localhost:3000/api/customer/'+id,
    type        : 'DELETE',
    dataType    : 'json',
    contentType : 'application/x-www-form-urlencoded',
    success     : function() {
      $(`#customer${id}`).remove();
      $(`#detailmodal${id}`).remove();
      $(`#deletemodal${id}`).remove();
      $(`.modal-backdrop.fade.in`).remove();
    }
  })

}
