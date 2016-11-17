//get datas
function getAllDatas() {
    $.ajax({
        url: "http://localhost:3000/api/carts",
        type: "GET",
        dataType: 'json',
        success: function(datas) {
            for (let i in datas) {
                $('#cart-list').append('\
                    <div class="col-md-3 col-sm-4 cart" data-id="' + datas[i]._id + '" style="padding: 15px;">\
                        <div class="circle-avatar" style="background-image:url(http://i.imgur.com/McXQ92l.png)"></div>\
                        <h4>' + datas[i].transactionDate + '</h4>\
                        <p>' + datas[i].customer.name + '</p>\
                        <div class="cart-items" data-id="' + datas[i]._id + '"></div>\
                        <button data-id="' + datas[i]._id + '" class="btn btn-sm btn-default" data-toggle="modal" data-target="#myModal" onclick="showEditData(this)"><span class="fa fa-pencil"></span></button>\
                        <button data-id="' + datas[i]._id + '" class="btn btn-sm btn-default" onclick="deleteData(this,event)"><span class="fa fa-trash"></span></button>\
                    </div>\
                ')

                for (let j in datas[i].itemList) {
                    $('.cart-items[data-id=' + datas[i]._id + ']').append('\
                        <p>' + datas[i].itemList[j].item.name + ' || ' + datas[i].itemList[j].qty + '</p>\
                    ')
                }
            }
        }
    })
}

//show customers list in customers dropdown
function showCustomers() {
    $.ajax({
        url: "http://localhost:3000/api/customers",
        type: "GET",
        dataType: 'json',
        success: function(datas) {
            for (let i in datas) {
                $('select[name=customer-id]').append('\
                    <option data-id="' + datas[i]._id + '">' + datas[i].name + '</option>\
                ')
            }
        }
    })
}

function showItems() {
    $.ajax({
        url: "http://localhost:3000/api/items",
        type: "GET",
        dataType: 'json',
        success: function(datas) {
            for (let i in datas) {
                $('select[name=item-id]').append('\
                    <option data-id="' + datas[i]._id + '">' + datas[i].name + '</option>\
                ')
            }
        }
    })
}

function showItemsOnEdit(id) {
    $.ajax({
        url: "http://localhost:3000/api/items",
        type: "GET",
        dataType: 'json',
        success: function(datas) {
            $('select[name=item-id-edit]').empty()

            for (let i in datas) {
                $('select[name=item-id-edit]').append('\
                    <option data-id="' + datas[i]._id + '">' + datas[i].name + '</option>\
                ')
            }

            $("#item-input-forms-edit select[item-id-edit="+ id +"]").attr('selected', 'selected')
        }
    })
}

//add item form group
function addItemForm(e) {
    e.preventDefault()
    

    $('#add-cart-form #item-input-forms-add').append('\
        <div class="item-input">\
            <div class="col-md-6" style="margin-bottom: 5px">\
                <select class="form-control" name="item-id">\
                    <option value="" disabled selected>Select an item</option>\
                </select>\
            </div>\
            <div class="col-md-3" style="margin-bottom: 5px">\
                <input class="form-control" placeholder="Qty" name="quantity">\
            </div>\
            <div class="col-md-3" style="margin-bottom: 5px;">\
                <button class="btn btn-default btn-block" onclick="deleteItem(this,event)"><span class="fa fa-trash-o"></span></button>\
            </div>\
        </div>\
    ')

    showItems()
}

// ========================
// EDIT FORMS

//add item form group
function addItemFormOnEdit(e,name,qty,id) {
    e.preventDefault()

    $('#edit-cart-form #item-input-forms-edit').append('\
        <div class="item-input">\
            <div class="col-md-6" style="margin-bottom: 5px">\
                <select class="form-control" item-id="'+ id +'" name="item-id-edit">\
                    <option value="" disabled selected>Select an item</option>\
                </select>\
            </div>\
            <div class="col-md-3" style="margin-bottom: 5px">\
                <input class="form-control" item-qty="'+ id +'" placeholder="Qty" name="quantity">\
            </div>\
            <div class="col-md-3" style="margin-bottom: 5px;">\
                <button class="btn btn-default btn-block" onclick="deleteItem(this,event)"><span class="fa fa-trash-o"></span></button>\
            </div>\
        </div>\
    ')

    showItemsOnEdit(id)
    console.log(name)
    
    $("#edit-cart-form input[item-qty="+ id +"]").attr('value', qty)
}

//show edit data form
function showEditData(pointer) {
    // $("#process-edit-item").attr('data-id', '')
    var id = $(pointer).attr('data-id')

    $('#edit-cart-form').each(function() {
        this.reset()
    })

    $('#edit-cart-form #item-input-forms-edit').empty()

    $.ajax({
            url: `http://localhost:3000/api/carts/${id}`,
            type: "GET",
            dataType: "json"
        })
        .done(function(data) {
            console.log(data)

            $("#edit-cart-form input[name=transaction-date]").attr('value', data.transactionDate)
            $("#edit-cart-form select[name=customer-id]").val('' + data.customer.name + '')
            for (let j in data.itemList) {
                addItemFormOnEdit(event, data.itemList[j].item.name, data.itemList[j].qty, j)
            }
        })
}
// ========================

//delete item form group
function deleteItem(pointer, e) {
    e.preventDefault()

    $(pointer).closest('.item-input').remove()
}

//post data
function addData() {
    $('#add-cart-form').submit(function(e) {
        e.preventDefault()

        var data = {
            transactionDate: $("#add-cart-form input[name=transaction-date]").val(),
            customer_id: $("#add-cart-form select[name=customer-id]").find(":selected").attr("data-id"),
            item_id: $("select[name=item-id]").find(":selected").attr("data-id"),
            qty: $("input[name=quantity]").val()
        }

        console.log(data)

        $.ajax({
                url: "http://localhost:3000/api/carts",
                type: "POST",
                dataType: "json",
                data: data
            })
            .done(function() {
                $('#add-cart-form').each(function() {
                    this.reset()
                })
                $('#alert-message').empty()
                $('#alert-message').append('\
                    <div class="alert alert-success">\
                        Data is added.\
                    </div>\
                ')
                window.scrollTo(0, 0);
            })
    })
}

//delete data
function deleteData(pointer, e) {
    e.preventDefault()

    var id = $(pointer).attr('data-id')

    $.ajax({
            url: `http://localhost:3000/api/carts/${id}`,
            type: "DELETE"
        })
        .done(function(data) {
            $(pointer).closest('.cart[data-id=' + id + ']').remove()
            $('#alert-message').empty()
            $('#alert-message').append('\
            <div class="alert alert-danger">\
                Data is deleted.\
            </div>\
        ')
            window.scrollTo(0, 0);
        })
}



$(function() {
    $(function() {
        $("#date, #date2").datepicker({
            dateFormat: "yy-mm-dd"
        });
    })
    getAllDatas();
    showCustomers();
    addData();
})
