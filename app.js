'use strict';
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var app = express();
var router = express.Router();
var endpoint = require('./Controller/controller')

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/',endpoint)

router.use((request, response, next) => {
    next();
  });

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Server MobileApps Backend is running at port ' + port);


module.exports = app;