$(document).ready(function(){
  $('#btn_add_item').on('click', () => {
    let new_data = {
      itemCode : $('#itemCode').val(),
      name : $('#name').val(),
      desc : $('#pricedescription').val(),
      price : $('#price').val(),
      stock : $('#stock').val()
    }

    $.ajax({
      type      : 'POST',
      dataType  : 'json',
      url       : 'http://localhost:3000/api/items',
      contentType: 'application/x-www-form-urlencoded',
      data      : new_data,
      success   : (data) => {
        console.log(data)
        $('#form_new_item')[0].reset()
      },
      error     : (err) => {
        console.log('error nih: ', err);
      }
    })
  })
})
