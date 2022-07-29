const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    var wi = Number(req.body.Weight);
    var hi = Number(req.body.Height);
    var BMI = wi/(hi*hi);

    res.send("Hello Hero, Your BMI is"+BMI);
});

app.listen(port, function(){
    console.log("Em Mama BMI Chuskovali ani tuhatuhaladutunnatu unnav")
});