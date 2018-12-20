var express = require('express'),
    fs = require('fs'),
    app = express();
//    eps = require('ejs'),
//    morgan = require('morgan');

var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static('public'));

// app is running!
console.log('running at ' + new Date());
app.get('/', function(req, res) {
    res.send('mailforce pinged at ' + new Date());
    console.log('Pinged at ' + new Date());
});

app.listen(8080, ip);

module.exports = app;
