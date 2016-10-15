'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var app = express();




require('./database');
require('./seeds');
app.use('/', express.static('public'));
app.use(parser.json());

app.use(parser.urlencoded({
    extended: true
}));
app.use('/api', router);


app.listen(3000, function() {
    console.log("running")
});
