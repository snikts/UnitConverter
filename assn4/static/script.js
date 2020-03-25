var theData;
var promise0;
var promise1;


var go_fetch = function() {
    url = 'https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json?api_key=PAjsyzzqxwdcXwxXPWWZ&limit=1&column_index=2'
    console.log(url)
    promise0 = fetch(url);
    promise1 = promise0.then(responseToJson);
    promise1.then(presentData);
}

var responseToJson = function(response) {
    return response.json();
}

var presentData = function(json) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1);
    console.log(json.dataset.data[0][1]);
    theData = json.dataset.data[0][1];
}