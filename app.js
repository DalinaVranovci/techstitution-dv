const express = require('express');
const bodyParser =require('body-parser');
const path=require('path');
const app = express();
//setup mongo
//Setup MongoDB
const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017/mydb';
const objectId=require('mongodb').ObjectId;

//Connecting MongoDB
MongoClient.connect(mongoURL, function(err , database ){
   
   if (err) {
       console.log(err);
   }else{
   console.log('MongoDB Connected !');
   }
   qkmk = database.collection('qkmk');
   
});

app.set("views", path.join(__dirname,'views'));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => res.render('index', {title: val1}));
app.get('/exercise', (req, res) => res.render("exercise", {data: dataJson, project: projectData}));
app.get('/show',function(req,res){
    var title="Lista me te dhena";
    qkmk.find({}).toArray(function(err,docs){
        if(err){
            console.log(err);
        }
        res.render('show' , {title : title ,docs :docs});
});  
});

app.post('/add', function (req, res) {  
    var data = req.body;
    qkmk.insert(data, function(err, results){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    
    });
 });
 
 app.get('/edit/:id', function (req, res) {
     var title="Edito te dhenat";
     var id=req.params.id;
     qkmk.findOne({_id: objectId(id)}, function(err,result){
         if(err){
             console.log(err);
         }
         res.render('edit', {title:title, doc: result});
     });
    
 });
 
 app.post('/update/:id', function (req, res) {
     var data=req.body;
     var id=objectId(req.params.id);
     qkmk.updateOne({ _id: id},
    {$set: data},
    function(err, result){
        if(err){
            console.log(err)
        }
        res.redirect('/show');
    });

 });
 app.get('/delete/:id', function (req, res) {

    var data=req.body;
    var id=objectId(req.params.id);
    qkmk.deleteOne({ _id: id},
   function(err, result){
       if(err){
           console.log(err)
       }
       res.redirect('/show');
   });
 });

var dataJson={
    Emri: "Dalina",
    Mbiemri: "Vranovci",
    Data: {
        dita: 21,
        muaji: 2
    }
};
var projectData=[{id: 1, name: "user1", dtl:{ viti: 1990, muaji: 10}},
{id: 2, name: "user2"},
{id: 3, name: "user3"}]
var val1="Forma e regjistrimit te pikave kufitare";
app.get('*', (req,res)=>res.send("Not found. Sorryy"));
var test= "String i shfaqur nga backend ne front";

app.listen(3000, () => console.log('Example app listening on port 3000!'));