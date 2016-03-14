var express = require('express');

var app = express();

app.listen(8887, function(){
    console.log('listening on port 8887');
});

var messages = [
    "Hello there.", 
    "I'm sorry, I cannot take any requests at this time.",
    "I can tell you how to do that."
];

var getRandomMessage = function(){
    var randIndex = Math.floor(Math.random() * (messages.length +1));
    return messages[randIndex];
};

//Options is the call the browser makes to check if the site we're getting data from allows cross-origin requests

app.options('/', function(req, res){
    res.statu(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send();
});

app.get('/', function(req, res){
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"  
    }).send(JSON.stringify({
        message: getRandomMessage()
    }));
});
