const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const date = require(__dirname+"/date.js");
// What Exactly we did is we have reduces our complexity of code by making a fucn in another file and requiring it in here.

// console.log(date());

const app = express();

const items = ["Complete Blog Website","Eat Avakai with Ghee","Eat Veg Manchurian","Play UNO"];
const workItems = [];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true})); //its a middle ware to proceess the user input

const port = 3000;

// ------------------------------------

app.get("/", function(req,res){
    

    let day = date.getDate();
    res.render("list", {listTitle: day, NewListitems : items});
    //You can also write the line of code that contains the js object and the folder and write once here for both.
    });

app.post("/", function(req,res)
{

    const item = req.body.newitem;

     if(item === "Work")
     {
        workItems.push(item);
        res.redirect("/work");
     }
     else
     {
        items.push(item);
        res.redirect("/");
     }

});

// ---------------------------------------------------------

app.get("/work",function(req,res)
{
    res.render("list", {listTitle:"Work List", NewListitems: workItems}); //list is file name that we created as temp
});

// ---------------------------------------------------------

app.get("/about", function(req,res)
{
    res.render("about")
});

// ---------------------------------------------------------

app.listen(port,function(){
    console.log("Dont Losse The Hope Just some modules left Complete it...!")
});