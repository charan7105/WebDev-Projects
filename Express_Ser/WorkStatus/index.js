const express = require("express");
const bodyparser = require("body-parser");

const app = express();

const port = 3000;

app.get("/", function(req,res){
    
    var today = new Date(); 
    // Babu Chukka "new Date()" creates a new date object with the current date and time.
    if (today.getDay()===6||today.getDay()===0){
        res.send("Yay Today is Holiday, Take Some rest Honey !!");
    }
    else{
        res.send("Hey..! Today you need to work..work properly and generate the best Output.");
    }
});

app.listen(port,function(){
    console.log("Dont Losse The Hope Just some modules left Complete it...!")
});