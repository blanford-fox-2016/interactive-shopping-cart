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
          <tr id="itemList">
            <td>${all_items[i].itemCode}</td>
            <td>${all_items[i].name}</td>
            <td>${all_items[i].description}</td>
            <td>${all_items[i].price}</td>
            <td>${all_items[i].stock}</td>
            <td>
              <select id="qty">
                  <option value="0">0</option>
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
              </select>
            </td>
            <td>
              <input type="hidden" id="id" value="${all_items[i]._id}">
            </td>
          </tr>
        `
      }

      $('#itemListContent').append(HTML_items)
    }
  })

  $('#btn_add_cart').on('click', (e) => {
    e.preventDefault()
    let checkout = []
    let memberId = $('#memberId').val()
    let transaction_date = $('#transaction_date').val()
    // console.log(memberId)
    // console.log(transaction_date);
    $('tr#itemList').each((i, el)   => {
      // console.log($(el).find('#id').val());
      // console.log($(el).find('select').val());
      if($(el).find('#id').val() != undefined && $(el).find('select').val() != 0){
        checkout.push({
          id : $(el).find('#id').val(),
          qty : $(el).find('select').val()
        })
      }
    })

    // $('#form_itemList').hide()
    // $('#form_new_cart, #list_cart').show()

    console.log(checkout);
  })

})
