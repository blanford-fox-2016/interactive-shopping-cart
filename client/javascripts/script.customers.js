//get datas
function getAllDatas() {
    $.ajax({
        url: "http://localhost:3000/api/customers",
        type: "GET",
        dataType: "json",
        success: function(datas) {
            $('#customer-list').empty()
            for (let j in datas) {
                $('#customer-list').append('\
					<div data-id="' + datas[j]._id + '" class="col-md-3 col-sm-4 col-xs-6" style="padding: 15px;">\
		                <div class="circle-avatar customer-image" style="background-image:url(' + datas[j].image + ')"></div>\
		                <h3 class="customer-name">' + datas[j].name + '</h3>\
		                <p class="customer-address">' + datas[j].address + '</p>\
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
    $('#add-customer-form').submit(function(e) {
        var data = {
            name: $("#add-customer-form input[name=name]").val(),
            address: $("#add-customer-form input[name=address]").val(),
            image: $("#add-customer-form input[name=image]").val()
        }

        $.ajax({
                url: "http://localhost:3000/api/customers",
                type: "POST",
                dataType: "json",
                data: data
            })
            .done(function() {
                $('#add-customer-form').each(function() {
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
            url: `http://localhost:3000/api/customers/${id}`,
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
    $("#process-edit-customer").attr('data-id', '')
    var id = $(pointer).attr('data-id')

    $.ajax({
            url: `http://localhost:3000/api/customers/${id}`,
            type: "GET",
            dataType: "json"
        })
        .done(function(data) {
            $("#edit-customer-form input[name=name]").attr('value', data.name)
            $("#edit-customer-form input[name=address]").attr('value', data.address)
            $("#edit-customer-form input[name=image]").attr('value', data.image)
            $("#process-edit-customer").attr('data-id', data._id)
        })
}

//edit data
function processEditData(pointer,e) {
	e.preventDefault()
    var id = $(pointer).attr('data-id')

    var data = {
        name: $("#edit-customer-form input[name=name]").val(),
        address: $("#edit-customer-form input[name=address]").val(),
        image: $("#edit-customer-form input[name=image]").val()
    }

    $.ajax({
            url: `http://localhost:3000/api/customers/${id}`,
            type: "PUT",
            dataType: "json",
            data: data
        })
        .done(function() {
            $('#edit-customer-form').each(function() {
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
