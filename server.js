const Express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const BodyParser = require('body-parser');
const uri = "mongodb+srv://dbuser:password667@acme-3ipgi.azure.mongodb.net/test?retryWrites=true&w=majority";

var collection;
var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/anka', (req,res) => {
    collection.find({}).toArray((err,result) => {
        res.send(result);
    })
})

app.get('/anka/:id', (req,res) => {
    collection.findOne({'_id': new ObjectId(req.params.id)},(err,result) => {
        res.send(result);
    })
})

app.listen(4242, () => {

    client.connect(err => {
        collection = client.db("sample_supplies").collection("sales");
        console.log('Connect to db');
        //client.close();
      });
      

});