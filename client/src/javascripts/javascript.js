function loadTableItem() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/item');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            html = '<h2>Item List</h2>'
            for (var i = 0; i < data.length; i++) {
                html += `<div class="panel panel-success"><div class="panel-heading"><h3> ${data[i].itemCode} - ${data[i].name}</h3><div class="clearfix"></div></div><div class="panel-body"> <div class='well well-sm'><strong>${data[i].description}</strong></div><div class='well well-sm'>Price : ${data[i].price}</div>
              <div class='well well-sm'>Stock : ${data[i].stock}</div></div></div>`
            }
            document.getElementById('itempanel').className = "active"
            document.getElementById('customerpanel').className = ""
            document.getElementById('transactionpanel').className = ""

            document.getElementById('list').innerHTML = html
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

function loadTableCustomer() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/customer');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            html = '<h2>Customer List</h2>'
            for (var i = 0; i < data.length; i++) {
                html += `<div class="panel panel-primary"><div class="panel-heading"><h3> ${data[i].memberId} - ${data[i].name}</h3><div class="clearfix"></div></div><div class="panel-body"><div class='well well-sm'> Address : ${data[i].address}</div><div class='well well-sm'>ZIP : ${data[i].zip}</div>
              <div class='well well-sm'>Phone : ${data[i].phone}</div></div></div>`
            }
            document.getElementById('itempanel').className = ""
            document.getElementById('customerpanel').className = "active"
            document.getElementById('transactionpanel').className = ""

            document.getElementById('list').innerHTML = html
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

// function loadTimeline() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3000/api/twatt/timeline');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText)
//             html = '<h2>Timeline</h2>'
//             for (var i = 0; i < data.length; i++) {
//                 html += '<div class="panel panel-info"><div class="panel-heading"><img src=' + data[i].user.profile_image_url + ' class="pull-left"><h3 > ' + data[i].user.name + ' - @' + data[i].user.screen_name + ' </h3><div class="clearfix"></div></div><div class="panel-body"><p id=tweets> ' + data[i].text + '</p></div></div>'
//             }
//             document.getElementById('tweets').innerHTML = html
//         } else {
//             alert('Request failed.  Returned status of ' + xhr.status);
//         }
//     };
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3000/api/twatt/timeline');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText)
//             html = '<h2>Timeline</h2>'
//             for (var i = 0; i < data.length; i++) {
//                 html += '<div class="panel panel-info"><div class="panel-heading"><img src=' + data[i].user.profile_image_url + ' class="pull-left"><h3 > ' + data[i].user.name + ' - @' + data[i].user.screen_name + ' </h3><div class="clearfix"></div></div><div class="panel-body"><p id=tweets> ' + data[i].text + '</p></div></div>'
//             }
//             document.getElem
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3000/api/twatt/timeline');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText)
//             html = '<h2>Timeline</h2>'
//             for (var i = 0; i < data.length; i++) {
//                 html += '<div class="panel panel-info"><div class="panel-heading"><img src=' + data[i].user.profile_image_url + ' class="pull-left"><h3 > ' + data[i].user.name + ' - @' + data[i].user.screen_name + ' </h3><div class="clearfix"></div></div><div class="panel-body"><p id=tweets> ' + data[i].text + '</p></div></div>'
//             }
//             document.getElem
// function userTweets() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3000/api/twatt/mytweet');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText)
//             html = '<h2>Timeline</h2>'
//             for (var i = 0; i < data.length; i++) {
//                 html += '<div class="panel panel-info"><div class="panel-heading"><img src=' + data[i].user.profile_image_url + ' class="pull-left"><h3 > ' + data[i].user.name + ' - @' + data[i].user.screen_name + ' </h3><div class="clearfix"></div></div><div class="panel-body"><p id=tweets> ' + data[i].text + '</p></div></div>'
//             }
//             document.getElementById('tweets').innerHTML = html
//         } else {
//             alert('Request failed.  Returned status of ' + xhr.status);
//         }
//     };
//     xhr.send();
// }
// function userMentions() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3000/api/twatt/mentions');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText)
//             html = '<h2>Timeline</h2>'
//             for (var i = 0; i < data.length; i++) {
//                 html += '<div class="panel panel-info"><div class="panel-heading"><img src=' + data[i].user.profile_image_url + ' class="pull-left"><h3 > ' + data[i].user.name + ' - @' + data[i].user.screen_name + ' </h3><div class="clearfix"></div></div><div class="panel-body"><p id=tweets> ' + data[i].text + '</p></div></div>'
//             }
//             document.getElementById('tweets').innerHTML = html
//         } else {
//             alert('Request failed.  Returned status of ' + xhr.status);
//         }
//     };
//     xhr.send();
// }
// function postTweet() {
//     var query = "status=" + document.getElementById('exampleTextarea').value
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'http://localhost:3000/api/twatt/update', true);
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
//     xhr.onreadystatechange = function() {
//         if (xhr.status === 200) {
//             userTweets()
//             document.getElementById('exampleTextarea').innerHTML = ""
//         } else {
//             alert('Request failed.  Returned status of ' + xhr.status);
//         }
//     };
//     xhr.send(query);
// }
// function searchTweet() {
//     var query = "q=" + document.getElementById('searchForm').value
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3000/api/twatt/search');
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText)
//             console.log(data);
//             html = '<h2>Timeline</h2>'
//             for (var i = 0; i < data.length; i++) {
//                 html += '<div class="panel panel-info"><div class="panel-heading"><img src=' + data[i].user.profile_image_url + ' class="pull-left"><h3 > ' + data[i].user.name + ' - @' + data[i].user.screen_name + ' </h3><div class="clearfix"></div></div><div class="panel-body"><p id=tweets> ' + data[i].text + '</p></div></div>'
//             }
//             document.getElementById('tweets').innerHTML = html
//         } else {
//             alert('Request failed.  Returned status of ' + xhr.status);
//         }
//     };
//     xhr.send();
// }
