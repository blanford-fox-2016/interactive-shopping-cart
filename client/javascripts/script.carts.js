//get datas
function getAllDatas(){
	$.ajax({
		url: "http://localhost:3000/api/carts",
		type: "GET",
		dataType: 'json',
		success: function(datas){
			for (let j in datas){
				$('#cart-list').append('\
					<div class="col-md-3 col-sm-4" data-id="data-id" style="padding: 15px;">\
		                <h4>' + datas[j].transactionDate + '</h4>\
		                <span class="fa fa-shopping-cart fa-5x"></span>\
		                <br><br>\
		                <p>' + datas[j].customer.name + '</p>\
		                <div id="cart-items"></div><br />\
		                <button type="submit" class="btn btn-sm btn-default" onclick="editData(this)"><span class="fa fa-pencil"></span></button>\
		                <button type="submit" class="btn btn-sm btn-default" onclick="deleteData(this)"><span class="fa fa-trash"></span></button>\
		            </div>\
				')

				for (let i in datas[j].itemList){
					console.log('mask')
					$('#cart-items').append('\
						<p>'+ datas[j].itemList[i].item.name +' || '+ datas[j].itemList[i].qty +'</p>\
					')
				}
			}


		}
	})
}

$(function(){
	getAllDatas();
})