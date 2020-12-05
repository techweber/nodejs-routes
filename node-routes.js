var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/content/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/content/about.html'));
});

app.listen(port);