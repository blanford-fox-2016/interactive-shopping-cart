'use strict'

$(document).ready(function(){
  $.ajax({
    url         : "http://localhost:3000/customer",
    method      : 'get',
    contentType : 'application/x-www-form-urlencoded',
    data        : {},
    success: function(data) {
      console.log(data)
      let resultHTML = `<tr>
      <td>${data.memberId}</td>
      <td>${data.name}</td>
      <td>${data.address}</td>
      <td>${data.zip}</td>
      <td>${data.phone}</td>
      </tr>`
      $("#listOfCustomers").append(resultHTML)
    }
  })
  addCustomer()
})

function sendCustData(custData){
  $.ajax({
    url         : "http://localhost:3000/customer/create",
    method      : 'post',
    contentType : 'application/x-www-form-urlencoded',
    data        : custData,
    success     : function (custData){
      var html = custData.map(x => '<td>' + x + '</td> /n');
      var resultHTML = "<tr>" + html.join("") + "</tr>"
      $('#listOfCustomers').append(resultHTML)
    }
  })
}


// get the value of object and send it to server
function addCustomer(){
  $(document).ready(function(){
    customerData = {
      name      : $('#customerName').val(),
      memberId  : $('#customerId').val(),
      address   : $('#customerAddress').val(),
      zip       : $('#customerZip').val(),
      phone     : $('#customerPhone').val()
    }
    sendCustData(JSON.stringify(customerData));
  })
}
