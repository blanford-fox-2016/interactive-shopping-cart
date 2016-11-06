//get datas
function getAllDatas(){
	$.ajax({
		url: "http://localhost:3000/api/customers",
		type: "GET",
		dataType: 'json',
		success: function(datas){
			for (let j in datas){
				$('#customer-list').append('\
					<div class="col-md-3 col-sm-4" data-id="data-id" style="padding: 15px;">\
		                <h4>' + datas[j].name + '</h4>\
		                <span class="fa fa-user fa-5x"></span>\
		                <br><br>\
		                <p>' + datas[j].address + '</p><br />\
		                <button type="submit" class="btn btn-sm btn-default" onclick="editData(this)"><span class="fa fa-pencil"></span></button>\
		                <button type="submit" class="btn btn-sm btn-default" onclick="deleteData(this)"><span class="fa fa-trash"></span></button>\
		            </div>\
				')
			}
		}
	})
}

$(function(){
	getAllDatas();
})