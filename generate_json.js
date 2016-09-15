var fs = require('fs');
var randomstring = require("randomstring");
var util = require('util');
var number_of_clients = 10;
var number_of_domains_per_client = 10;
var PATH = './../test_file/';
var FileName = 'log8.json';
var numOfReq = 3;
var gj = {};
var generateMAC = function() {
    var MAC = '';
    for (i = 0; i < 5; i++) {
        MAC = MAC + (Math.floor(Math.random() * 89) + 10) + ':';
    }
    MAC = MAC + (Math.floor(Math.random() * 89) + 10);
    return (MAC);
}

gj.generateJson = function() {
        //fs.writeFile(PATH + FileName, '', function(err) {});

        var arr = [];

        for (j = 0; j < number_of_clients; j++) {
            var arr1 = [];
            var rand_client = generateMAC();
            var client_substring = '": {"RX": "67002","TX": "93639","Sites": {';
            var client_json1 = '"' + rand_client + client_substring;

            for (i = 0; i < number_of_domains_per_client; i++) {
                var rand_domain = randomstring.generate(7);
                var dummy_epoch = Math.floor(((new Date).getTime()) / 1000);
                var dummy_hit = '1';
                var sites_substring = '"' + rand_domain + '":["' + dummy_epoch + '","' + dummy_hit + '"]';
                arr1.push(sites_substring);

            }

            var d = arr1.join([separator = ',']);
            client_json1 = client_json1 + d + '}}';


            var client_data = JSON.stringify(client_json1);
            client_data = JSON.parse(client_data);
            arr.push(client_data);
        }
        var rand_MAC = generateMAC();
        var MAC_substring = util.format('{"MAC": "%s","TZ": "+0530","Data": {', rand_MAC);
        var generatedJson = MAC_substring + arr + '}}';
        return generatedJson;

    }
module.exports = gj;
