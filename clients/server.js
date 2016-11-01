'use strict'

function addCustomer(){
  $(document).ready(function(){
    customerData = {
      name      : $('#customerName').val(),
      memberId  : $('#customerId').val(),
      address   : $('#customerAddress').val(),
      zip       : $('#customerZip').val(),
      phone     : $('#customerPhone').val()
    }
    sendCustData(customerData);
  })
}

function sendCustData(customerData){
  $.ajax({
    url         : "http://localhost:3000/customer/create",
    method      : 'post',
    contentType : 'application/x-www-form-urlencoded',
    data        : {data:customerData}
  ,
    success     : function (data){
    console.log("--------",data)
      let resultHTML = `<tr>
      <td>${data.memberId}</0td>
      <td>${data.name}</td>
      <td>${data.address}</td>
      <td>${data.zip}</td>
      <td>${data.phone}</td>
      </tr>`
      $("#listOfCustomers").append(resultHTML)
    }
  })
}


$(document).ready(function(){
  $.ajax({
    url         : "http://localhost:3000/customer",
    method      : 'get',
    contentType : 'application/x-www-form-urlencoded',
    data        : {},
    success: function(data) {
      console.log(data)
         var dataHTML
         for(var i = 0; i < data.length; i++){
           dataHTML += `<tr>
           <td>${data[i].memberId}</td>
           <td>${data[i].name}</td>
           <td>${data[i].address}</td>
           <td>${data[i].zip}</td>
           <td>${data[i].phone}</td>
           </tr>`
         }
         $('#listOfCustomers').append(dataHTML)
       }
  })
})
