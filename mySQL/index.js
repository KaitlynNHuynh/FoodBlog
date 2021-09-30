var express = require('express');
var app = express();

app.use('/api/account', require('./routes/account.route'));

var server = app.listen(8081, function () {})