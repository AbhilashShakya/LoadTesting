var fs = require('fs');
var http = require('http');
var generateJson = require('./generate_json.js');
var body;
var FileName = 'data1.json';
var start_time = Date.now();
var check = 0;
var total_req = 10;
var i = 0;

intervalSender = setInterval(function() {

    i++;

    if (i >= total_req) {
        clearInterval(intervalSender);
    }
    //console.log('i = ',i);
    var data = generateJson.generateJson();
    console.log(data);
    //FileName = 'data'+i+'.json';

    var body = JSON.parse(data);


    var request = require('request');

    request({
        url: 'https://sitemonitoring-abhilashsecurifi.c9users.io',
        method: 'POST',
        json: body
    }, function(error, response, body) {
        console.log('asdasdas', i);
        if (error) {
            console.log(error);
        }
        else {
            console.log(response.statusCode, body);
        }
    });
    //})

}, 200);
