//get datas
function getAllDatas() {
    $.ajax({
        url: "http://localhost:3000/api/items",
        type: "GET",
        dataType: "json",
        success: function(datas) {
            $('#item-list').empty()
            for (let j in datas) {
                $('#item-list').append('\
					<div data-id="' + datas[j]._id + '" class="col-md-3 col-sm-4 col-xs-6" style="padding: 15px;">\
		                <div class="circle-avatar item-image" style="background-image:url(' + datas[j].image + ')"></div>\
		                <h3 class="item-name">' + datas[j].name + '</h3>\
		                <p class="item-price">Rp.' + datas[j].price + '</p>\
		                <p class="item-stock">' + datas[j].stock + ' stocks left</p>\
		                <button type="submit" class="btn btn-sm btn-default" data-toggle="modal" data-target="#myModal" data-id="' + datas[j]._id + '" onclick="showEditData(this)"><span class="fa fa-pencil"></span></button>\
		                <button type="submit" class="btn btn-sm btn-default" data-id="' + datas[j]._id + '" onclick="deleteData(this)"><span class="fa fa-trash"></span></button>\
		            </div>\
				')
            }
        }
    })
}

//post data
function addData() {
    $('#add-item-form').submit(function(e) {
        var data = {
            name: $("#add-item-form input[name=name]").val(),
            price: $("#add-item-form input[name=price]").val(),
            stock: $("#add-item-form input[name=stock]").val(),
            image: $("#add-item-form input[name=image]").val()
        }

        $.ajax({
                url: "http://localhost:3000/api/items",
                type: "POST",
                dataType: "json",
                data: data
            })
            .done(function() {
                $('#add-item-form').each(function() {
                    this.reset()
                })
                getAllDatas()
                $('#alert-message').empty()
                $('#alert-message').append('\
					<div class="alert alert-success">\
                		Data is added.\
            		</div>\
        		')
                window.scrollTo(0, 0);
            })

        e.preventDefault()
    })
}

//delete data
function deleteData(pointer) {
    var id = $(pointer).attr('data-id')

    $.ajax({
            url: `http://localhost:3000/api/items/${id}`,
            type: "DELETE"
        })
        .done(function(data) {
            getAllDatas()
            $('#alert-message').empty()
            $('#alert-message').append('\
			<div class="alert alert-danger">\
                Data is deleted.\
            </div>\
        ')
            window.scrollTo(0, 0);
        })
}

//show edit data form
function showEditData(pointer) {
    $("#process-edit-item").attr('data-id', '')
    var id = $(pointer).attr('data-id')

    $.ajax({
            url: `http://localhost:3000/api/items/${id}`,
            type: "GET",
            dataType: "json"
        })
        .done(function(data) {
            $("#edit-item-form input[name=name]").attr('value', data.name)
            $("#edit-item-form input[name=price]").attr('value', data.price)
            $("#edit-item-form input[name=stock]").attr('value', data.stock)
            $("#edit-item-form input[name=image]").attr('value', data.image)
            $("#process-edit-item").attr('data-id', data._id)
        })
}

//edit data
function processEditData(pointer,e) {
	e.preventDefault()
    var id = $(pointer).attr('data-id')

    var data = {
        name: $("#edit-item-form input[name=name]").val(),
        price: $("#edit-item-form input[name=price]").val(),
        stock: $("#edit-item-form input[name=stock]").val(),
        image: $("#edit-item-form input[name=image]").val()
    }

    $.ajax({
            url: `http://localhost:3000/api/items/${id}`,
            type: "PUT",
            dataType: "json",
            data: data
        })
        .done(function() {
            $('#edit-item-form').each(function() {
                this.reset()
            })
            $('#myModal').modal('toggle')
            getAllDatas()
            $('#alert-message').empty()
            $('#alert-message').append('\
					<div class="alert alert-warning">\
                		Data is edited.\
            		</div>\
        		')
            window.scrollTo(0, 0);
        })
}

$(function() {
    getAllDatas()
    addData()
})
