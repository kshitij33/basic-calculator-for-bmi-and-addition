//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    // res.send("<h1>Hello, World!!</h1>");
    // res.sendFile("index.html");
    res.sendFile(__dirname+"/index.html");
}); 

app.post("/",function(req, res){
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    console.log(req.body);
    res.send("The result is "+result);
});

app.get("/bmicalculator", function (req, res){
    // res.send("<h1>HELLO WORLD</h1>");
    res.sendFile(__dirname+"/bmiCalculator.html");
});


app.post("/bmicalculator", function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result = weight/(height*height);
    console.log(req.body);
    res.send("The result is "+result);
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});