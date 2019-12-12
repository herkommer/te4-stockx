var Express = require('express');
var MongoClient = require('mongodb');
var BodyParser = require('body-parser');

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.listen(4242, () => {});