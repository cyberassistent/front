var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/cyber.html'));
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
