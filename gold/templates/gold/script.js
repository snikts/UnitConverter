var theData;
var promise0;
var promise1;
const apiKey = "api_key=PAjsyzzqxwdcXwxXPWWZ";
const limit = "limit=1"
const column = "column_index=2"


var go_fetch = function() {
    let url = 'https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json?api_key=PAjsyzzqxwdcXwxXPWWZ&limit=1&column_index=2';
    console.log(url)
    promise0 = fetch(url);
    promise1 = promise0.then(responseToJson);
    promise1.then(presentData);
    let fibReqUrl = '${protocol}://${hostname}/convert?from=${document.querySelector("#from").value}&to=t_oz&value=${document.querySelector{"#value").value}';
    let promiseStreamToJsonCallback = function(response) {
        return response.json();
    }
    let promiseJsonProcessingCallback = function(json) {
        let duration = new Date() - before;
        console.log(json);
        if(json.hasOwnProperty('error')) {
            document.querySelector('#result').textContent = 'Error: ${json.error}';
        }
        else {
            document.querySelector('#result').textContent = 'Fib(${json['N']}) = ${json['fibonacci']}';
        }
    }

    let before = new Date();
    let p0 =fetch(fibReqUrl);
    let p1 = p0.then(promiseStreamToJsonCallback);
    let p2 = p1.then(promiseJsonProcessingCallback);
}

var responseToJson = function(response) {
    return response.json();
}

var presentData = function(json) {
    console.log(json.dataset.data[0][1]);
    theData = json.dataset.data[0][1];
}

var formParamsString = function() {
    let argsArray = Array.from(arguments);
    let url = argsArray.shift();
    return `${url}?${argsArray.join('&')}`;
}

var update_url = function(select) {
    let url = select.value
    switch(url) {
        case "T":
        case "g":
        case "t_oz":
            url = formParamsString('https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json', apiKey, limit, column);
            break;

        case "kg":
        case "lb":
        case "oz":
            url = formParamsString('https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json', apiKey, limit, column);
            break;

        default:
        let error = "Whoops! I don't know what to do with the value.";
        console.log(error);
        alert(error);
        url = false;
        break;

    }

    if(url) {
        for(let span of document.querySelectorAll('.url')) {
            span.textContent = url;
        }
    }
}