$(document).ready(() => {
  $.ajax({
    url:  "http://localhost:3000/api/customers",
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    success : (all_cust) => {
      console.log(all_cust);
      let HTML_cust = ''
      for (var i = 0; i < all_cust.length; i++) {
        HTML_cust += `
          <option value=${all_cust[i]._id}>${all_cust[i].name} - ${all_cust [i]._id}</option>
        `
      }

      $('#memberId').append(HTML_cust)
    }
  })

  let showDateNow = (date) => {
    // console.log(date);
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    if(day < 10){
      day = String(day)
      day = 0 + day
    }
    // console.log(day);
    return `${year}-${month}-${day}`
  }

  $('#transaction_date').val(showDateNow(new Date()));

  $.ajax({
    url:  "http://localhost:3000/api/items",
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    success : (all_items) => {
      console.log(all_items);
      let HTML_items = ''
      for (var i = 0; i < all_items.length; i++) {
        HTML_items += `
          <tr>
            <td>${all_items[i].itemCode}</td>
            <td>${all_items[i].name}</td>
            <td>${all_items[i].description}</td>
            <td>${all_items[i].price}</td>
            <td>${all_items[i].stock}</td>
            <td class="col-xs-1">
              <input list="qty" id="qty">
                <datalist id="qty">
                <option value="1">
                <option value="2">
                <option value="3">
                <option value="4">
                <option value="5">
                <option value="6">
                <option value="7">
                <option value="8">
                <option value="9">
                <option value="10">
              </datalist>
            </td>
          </tr>
        `
      }

      $('#itemListTable').append(HTML_items)
    }
  })

  $('#btn_add_cart').on('click', (e) => {
    e.preventDefault()
    let new_cart = {
      memberId    : $('#memberId').val(),
      total        : $('#total').val(),
      transaction_date : $('#transaction_date').val(),
      itemList       : $('#qty').val()
    }

    console.log(new_cart);
    // $.ajax({
    //   url         : 'http://localhost:3000/api/items',
    //   type        : 'POST',
    //   dataType    : 'json',
    //   contentType : 'application/x-www-form-urlencoded',
    //   data        : new_cart,
    //   success     : (new_cart_server) => {
    //   }
    // })
  })

})
