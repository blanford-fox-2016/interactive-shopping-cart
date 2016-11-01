$(document).ready(function() {

    createTableItem()
    $('#btnAddItem').on('click', addItem);
    $('#itemList table tbody').on('click', 'td a.btn.btn-warning', updateItem);
    $('#itemList table tbody').on('click', 'td a.btn.btn-danger', deleteItem);

});

let createTableItem = () => {
    let tableContent = ''
    $.getJSON('/api/item', (data) => {

        for (var i = 0; i < data.length; i++) {
            tableContent += '<tr>';
            tableContent += '<td>' + data[i].itemCode + '</td>';
            tableContent += '<td>' + data[i].name + '</td>';
            tableContent += '<td>' + data[i].description + '</td>';
            tableContent += '<td>' + data[i].price + '</td>';
            tableContent += '<td>' + data[i].stock + '</td>';
            tableContent += `<td><a href="#" id="${data[i]._id}" class="btn btn-warning" role="button" rel="'${data[i]._id}'">Update</a></td>`;
            tableContent += `<td><a href="#" id="${data[i]._id}" class="btn btn-danger" role="button" rel="'${data[i]._id}'">Delete</a></td>`;
            tableContent += '</tr>';
        }
        $('#itemList table tbody').html(tableContent)
    })
}

let addItem = (event) => {
    event.preventDefault()
    var errorCount = 0;
    $('#addItem input').each(function(index, val) {
        if ($(this).val() === '') {
            errorCount++;
        }
    });
    if (errorCount === 0) {
        var newItem = {
            'itemCode': $('#addItem fieldset input#inputitemCode').val(),
            'name': $('#addItem fieldset input#inputname').val(),
            'description': $('#addItem fieldset input#inputdescription').val(),
            'price': $('#addItem fieldset input#inputprice').val(),
            'stock': $('#addItem fieldset input#inputstock').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({type: 'POST', data: newItem, url: '/api/item', dataType: 'JSON'}).done(function(response) {
            $('#addItem fieldset input').val('');
            createTableItem();

        });
    } else {
        alert('Please fill in all fields');
        return false;
    }

}

let updateItem = (event) => {
    console.log($('td a.btn.btn-warning').attr('rel'));
    event.preventDefault()
    $.ajax({
        type: 'GET',
        url: '/api/item/' + $('td a.btn.btn-warning').attr('rel')
    }).done((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            $('input#inputitemCode').val(data.itemCode);
            $('input#inputname').val(data.name);
            $('input#inputdescription').val(data.description);
            $('input#inputprice').val(data.price);
            $('input#inputstock').val(data.stock);
        }
    })
}

let deleteItem = (event) => {
    console.log($('td a.btn.btn-danger').attr('rel'));
    event.preventDefault();
    var confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation === true) {
        $.ajax({
            type: 'DELETE',
            url: '/api/item/' + $('td a.btn.btn-danger').attr('rel')
        }).done(function(response) {
            console.log(response);
            createTableItem();
        });
    } else {
        return false;
    }

};
