$(document).ready(function(){
  $('#btn_update_item').hide()

  showAll()

  submitButton()

  submitUpdateButton()
})

let submitEditButton = (id) => {
  $.ajax({
    url:  "http://localhost:3000/api/items/"+id,
    method: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    success: (edited_item) => {
      // console.log(edited_item)
      $('#itemCode').val(edited_item.itemCode)
      $('#name').val(edited_item.name)
      $('#description').val(edited_item.description)
      $('#price').val(edited_item.price)
      $('#stock').val(edited_item.stock)
      console.log(edited_item._id);

      let hidden_id = `
      <tr id="hidden_id">
        <td>
          <input type="hidden" id="id" value="${edited_item._id}">
        </td>
      </tr>`

      $('#form_new_item').append(hidden_id)

      $('#btn_add_item').prop('disabled', true)
      $('#btn_update_item').show()
    }
  })
}

let submitUpdateButton = () => {
  $('#btn_update_item').on('click', (e) => {
    e.preventDefault()
    let new_edit_data = {
      _id : $('#id').val(),
      itemCode : $('#itemCode').val(),
      name : $('#name').val(),
      description : $('#description').val(),
      price : $('#price').val(),
      stock : $('#stock').val()
    }
    console.log('...................', new_edit_data._id);
    $.ajax({
      url: "http://localhost:3000/api/items/"+new_edit_data._id,
      method: 'PUT',
      contentType: 'application/x-www-form-urlencoded',
      data : new_edit_data,
      success: (new_edited_item) => {
        console.log(new_edited_item)
        let replace_row = `
        <tr id=${new_edited_item._id}>
        <td>${new_edited_item.itemCode}</td>
        <td>${new_edited_item.name}</td>
        <td>${new_edited_item.description}</td>
        <td>${new_edited_item.price}</td>
        <td>${new_edited_item.stock}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_item" onclick="submitEditButton('${new_edited_item._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_item" onclick="submitDeleteButton('${new_edited_item._id}')">Delete</button>
        </td>
        </tr>
        `
        $(`#${new_edited_item._id}`).replaceWith(replace_row)
        $('#form_new_item')[0].reset()
        $('#btn_update_item').hide()
        $('#btn_add_item').prop('disabled', false)
        $('#hidden_id').remove()
      }
    })
  })
}

let submitDeleteButton = (id) => {
  if(confirm('Are you sure want to delete?')){
    // alert(`yes`)
    $.ajax({
      url         : 'http://localhost:3000/api/items/'+id,
      type        : 'DELETE',
      dataType    : 'json',
      contentType : 'application/x-www-form-urlencoded',
      success     : () => {
        $(`#${id}`).remove()
      }
    })

  }else{
    // alert(`no`)
    return false
  }
}

let submitButton = () => {
  $('#btn_add_item').on('click', (e) => {
    e.preventDefault()
    let new_data = {
      itemCode    : $('#itemCode').val(),
      name        : $('#name').val(),
      description : $('#description').val(),
      price       : $('#price').val(),
      stock       : $('#stock').val()
    }

    $.ajax({
      url         : 'http://localhost:3000/api/items',
      type        : 'POST',
      dataType    : 'json',
      contentType : 'application/x-www-form-urlencoded',
      data        : new_data,
      success     : (new_data_from_server) => {
        console.log(new_data_from_server)
        let appendHTML = `
        <tr id=${new_data_from_server._id}>
          <td>${new_data_from_server.itemCode}</td>
          <td>${new_data_from_server.name}</td>
          <td>${new_data_from_server.description}</td>
          <td>${new_data_from_server.price}</td>
          <td>${new_data_from_server.stock}</td>
          <td>
            <button type="button" class="btn btn-warning" id="edit_item" onclick="submitEditButton('${new_data_from_server._id}')">Edit</button>
            <button type="button" class="btn btn-danger" id="delete_item" onclick="submitDeleteButton('${new_data_from_server._id}')">Delete</button>
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

let showAll = () => {
  $.ajax({
    url:  "http://localhost:3000/api/items",
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    data: {
    },
    success: function(all_data) {
      console.log(all_data)
      let all_data_HTML = ''
      for(var i = 0; i < all_data.length; i++){
        all_data_HTML += `<tr id=${all_data[i]._id}>
        <td>${all_data[i].itemCode}</td>
        <td>${all_data[i].name}</td>
        <td>${all_data[i].description}</td>
        <td>${all_data[i].price}</td>
        <td>${all_data[i].stock}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_item" onclick="submitEditButton('${all_data[i]._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_item" onclick="submitDeleteButton('${all_data[i]._id}')">Delete</button>
        </td>
        </tr>`
      }
      $('#body_table_items').append(all_data_HTML)
    }
  })
}
