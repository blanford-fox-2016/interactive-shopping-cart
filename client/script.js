$(document).ready(function(){

  showAllItems()

  submitNewItem()

})

let submitEditItem = (id) => {
  alert(id)
}

let submitDeleteItem = (id) => {
  alert(id)
}

let showAllItems = () => {
  $.ajax({
    url:  "http://localhost:3000/api/items",
    method: 'get',
    contentType: 'application/x-www-form-urlencoded',
    data: {
    },
    success: function(all_data) {
      console.log(all_data)
      let all_data_HTML = ''
      for(var i = 0; i < all_data.length; i++){
        all_data_HTML += `<tr>
        <td>${all_data[i].itemCode}</td>
        <td>${all_data[i].name}</td>
        <td>${all_data[i].description}</td>
        <td>${all_data[i].price}</td>
        <td>${all_data[i].stock}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_item" onclick="submitEditItem('${all_data[i]._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_item" onclick="submitDeleteItem('${all_data[i]._id}')">Delete</button>
        </td>
        </tr>`
      }
      $('#body_table_items').append(all_data_HTML)
    }
  })
}

let submitNewItem = () => {
  $('#btn_add_item').on('click', () => {
    let new_data = {
      itemCode : $('#itemCode').val(),
      name : $('#name').val(),
      description : $('#description').val(),
      price : $('#price').val(),
      stock : $('#stock').val()
    }

    $.ajax({
      type      : 'POST',
      dataType  : 'json',
      url       : 'http://localhost:3000/api/items',
      contentType: 'application/x-www-form-urlencoded',
      data      : new_data,
      success   : (new_data_from_server) => {
        console.log(new_data_from_server)
        let appendHTML = `
        <tr>
          <td>${new_data_from_server.itemCode}</td>
          <td>${new_data_from_server.name}</td>
          <td>${new_data_from_server.description}</td>
          <td>${new_data_from_server.price}</td>
          <td>${new_data_from_server.stock}</td>
          <td>
            <button type="button" class="btn btn-warning" id="edit_item" onclick="submitEditItem('${new_data_from_server._id}')">Edit</button>
            <button type="button" class="btn btn-danger" id="delete_item" onclick="submitDeleteItem('${new_data_from_server._id}')">Delete</button>
          </td>
        </tr>
        `

        $('#body_table_items').prepend(appendHTML)
        $('#form_new_item')[0].reset()
      },
      error     : (err) => {
        console.log('error nih: ', err);
      }
    })
  })
}
