$(document).ready(function(){
  $('#btn_update_cust').hide()

  showAll()

  submitButton()

  submitUpdateButton()
})

let submitEditButton = (id) => {
  $.ajax({
    url:  "http://localhost:3000/api/customers/"+id,
    method: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    success: (edited_cust) => {
      // console.log(edited_cust)
      $('#name').val(edited_cust.name)
      $('#memberId').val(edited_cust.memberId)
      $('#address').val(edited_cust.address)
      $('#zip').val(edited_cust.zip)
      $('#phone').val(edited_cust.phone)
      console.log(edited_cust._id);

      let hidden_id = `
      <tr id="hidden_id">
        <td>
          <input type="hidden" id="id" value="${edited_cust._id}">
        </td>
      </tr>`

      $('#form_new_cust').append(hidden_id)

      $('#btn_add_cust').prop('disabled', true)
      $('#btn_update_cust').show()
    }
  })
}

let submitUpdateButton = () => {
  $('#btn_update_cust').on('click', (e) => {
    e.preventDefault()
    let new_edit_data = {
      _id : $('#id').val(),
      name : $('#name').val(),
      memberId : $('#memberId').val(),
      address : $('#address').val(),
      zip : $('#zip').val(),
      phone : $('#phone').val()
    }
    console.log('...................', new_edit_data._id);
    $.ajax({
      url: "http://localhost:3000/api/customers/"+new_edit_data._id,
      method: 'PUT',
      contentType: 'application/x-www-form-urlencoded',
      data : new_edit_data,
      success: (new_edited_cust) => {
        console.log(new_edited_cust)
        let replace_row = `
        <tr id=${new_edited_cust._id}>
        <td>${new_edited_cust.name}</td>
        <td>${new_edited_cust.memberId}</td>
        <td>${new_edited_cust.address}</td>
        <td>${new_edited_cust.zip}</td>
        <td>${new_edited_cust.phone}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_cust" onclick="submitEditButton('${new_edited_cust._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_cust" onclick="submitDeleteButton('${new_edited_cust._id}')">Delete</button>
        </td>
        </tr>
        `
        $(`#${new_edited_cust._id}`).replaceWith(replace_row)
        $('#form_new_cust')[0].reset()
        $('#btn_update_cust').hide()
        $('#btn_add_cust').prop('disabled', false)
        $('#hidden_id').remove()
      }
    })
  })
}

let submitDeleteButton = (id) => {
  if(confirm('Are you sure want to delete?')){
    // alert(`yes`)
    $.ajax({
      url         : 'http://localhost:3000/api/customers/'+id,
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
  $('#btn_add_cust').on('click', (e) => {
    e.preventDefault()
    let new_data = {
      name        : $('#name').val(),
      memberId    : $('#memberId').val(),
      address     : $('#address').val(),
      zip         : $('#zip').val(),
      phone       : $('#phone').val()
    }

    $.ajax({
      url         : 'http://localhost:3000/api/customers',
      type        : 'POST',
      dataType    : 'json',
      contentType : 'application/x-www-form-urlencoded',
      data        : new_data,
      success     : (new_data_from_server) => {
        console.log(new_data_from_server)
        let appendHTML = `
        <tr id=${new_data_from_server._id}>
          <td>${new_data_from_server.name}</td>
          <td>${new_data_from_server.memberId}</td>
          <td>${new_data_from_server.address}</td>
          <td>${new_data_from_server.zip}</td>
          <td>${new_data_from_server.phone}</td>
          <td>
            <button type="button" class="btn btn-warning" id="edit_cust" onclick="submitEditButton('${new_data_from_server._id}')">Edit</button>
            <button type="button" class="btn btn-danger" id="delete_cust" onclick="submitDeleteButton('${new_data_from_server._id}')">Delete</button>
          </td>
        </tr>
        `

        $('#body_table_cust').prepend(appendHTML)
        $('#form_new_cust')[0].reset()
      },
      error     : (err) => {
        console.log('error nih: ', err);
      }
    })
  })
}

let showAll = () => {
  $.ajax({
    url:  "http://localhost:3000/api/customers",
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    data: {
    },
    success: function(all_data) {
      console.log(all_data)
      let all_data_HTML = ''
      for(var i = 0; i < all_data.length; i++){
        all_data_HTML += `<tr id=${all_data[i]._id}>
        <td>${all_data[i].name}</td>
        <td>${all_data[i].memberId}</td>
        <td>${all_data[i].address}</td>
        <td>${all_data[i].zip}</td>
        <td>${all_data[i].phone}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_cust" onclick="submitEditButton('${all_data[i]._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_cust" onclick="submitDeleteButton('${all_data[i]._id}')">Delete</button>
        </td>
        </tr>`
      }
      $('#body_table_cust').append(all_data_HTML)
    }
  })
}
