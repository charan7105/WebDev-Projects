const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
// What Exactly we did is we have reduces our complexity of code by making a fucn in another file and requiring it in here.

// console.log(date());

const app = express();

//Hello Pends Bye Pends

const workItems = [];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true})); //its a middle ware to proceess the user input

//-------------------------------------------

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemSchema = 
{
    I_name : String,
};

const Item = mongoose.model("Item",itemSchema);

const Item1 = new Item({
    I_name : "Welcome to your todolist !"
});

const Item2 = new Item({
    I_name : "Hit the + Button to add a new item"
});

const Item3 = new Item({
    I_name : "<-- Hit this to delete an item"
});

const defaultItems = [Item1,Item2,Item3];

//----------------------------------------------

const listSchema = 
{
    I_name : String,
    items : [itemSchema]
};

const List = mongoose.model("List",listSchema);

//----------------------------------------------

const port = 3000;

//----------------------------------------------

app.get("/", function(req,res){
    //Here we are using find() Method {} Means Condition. and a callback function which includes the error and the result document.
    //avalue contains the things that we found the callback func.
    Item.find({},function(err, avalue)
    //{} means it will finds all the documents not only one.
    {
        if(avalue.length===0)
        {
            Item.insertMany(defaultItems,function(err){
                if(err)
                {
                    console.log("Error at adding default items into db at line 42");
                }
                else
                {
                    console.log("Sucessfully added defaults.");
                }
            });
            res.redirect("/");
             //What exactly it will do is firstly it will check it is emplty or not. if it found emplty then it will do the operation that we have put in if and then after that rendirect again to the home and now after checking again it will find like its not equal to zero. so now it will directly take to else without if.
        } 
        else
        {
            res.render("list",{listTitle: "Today", NewListitems: avalue});
        } 
    });
});

//-----------------------------------------------

//app.get("/category/:<paramName>",function(req,res){----------});
//What exactly it do is we need to have diff files in our todo list we are not going to use it only in home route so for that we are using this method route Parameters
app.get("/:customListName",function(req,res)
{
    console.log("First")
    const customListName = req.params.customListName;

    List.find({I_name: customListName},function(err, avalue)
    {
        console.log("Hiii 1")
        if(!err)
        {
            console.log("Hiii 2")
            console.log(avalue);
            if(avalue.length===0)
            {
                console.log("Hiii 3")
               //Create a new list
               const list = new List(
                {
                    I_name : customListName,
                    items : defaultItems
                });
                
                list.save();
                console.log(list)
                res.redirect("/"+customListName)
            } else {
                //show an existiting list
                res.render("list", {listTitle: avalue[0].I_name, NewListitems : avalue[0].items});
            }
        }
    });
});


//-----------------------------------------------

app.post("/", function(req,res)
{

    const itemName = req.body.newitem;
    const item = new Item({
        I_name : itemName
    });
    item.save(); //db.collection.save() Method

    //Why we use again here is after saving its going save in db and make it in browser to we just need to redirect to the / Route.

    res.redirect("/");
    //If we dont do use this res.redirect means it won't be render immediately after initialzing. when we run node index.js again then it will appear, so this is what exactly res.redirect("/") do.
});

//------------------------------------------------

app.post("/delete",function(req,res){
    const delitem = req.body.checkbox;
    Item.findByIdAndRemove(delitem,function(err)
    {   //Its very Important to give the call backs.
        if(err){
                console.log("Some error it there for line of code at 100 Line no")
               }
               else
                {
                    console.log("Sucessfully deleted the selected one.");
                } 
    });
    res.redirect("/");
    //If we dont do use this res.redirect means it won't be render immediately after initialzing. when we run node index.js again then it will appear, so this is what exactly res.redirect("/") do.
});

//----------------------------------------------

app.get("/about", function(req,res)
{
    res.render("about")
});

//-----------------------------------------------

app.listen(port,function(){
    console.log("Dont Losse The Hope Just some modules left Complete it...!")
});