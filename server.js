var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:'codingdojorocks'}))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("index");
});

app.post("/create", function(req, res){
    req.session["info"] = req.body;
    console.log(req.body);
    res.redirect("/result");
});

app.get("/result", function(req, res){
    res.render('result', {
        name: req.session.info.name,
        location: req.session.info.location,
        language: req.session.info.language,
        comment: req.session.info.comment 
    });
});

app.listen(8000, function(){
    console.log('listening on port 8000');
});