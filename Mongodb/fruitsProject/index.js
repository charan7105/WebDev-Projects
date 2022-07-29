const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB")
//This line will represent the info that we have written till line 24 in our previous code

//----------------------------------------------

//Create Schema
const fruitSchema = new mongoose.Schema ({

  Fname : {
    type: String,
    required: [true,"Pls check your data entry, no name specified !"]
    //We Validated that its compulsory and if you wont do this then it will gonna print that statement
  },

  rating : {
    type : Number,
    min: 1,
    max: 10,
    // WE fixed the limit of rating to 1-10
  },

  review: String

})

const Fruit = mongoose.model("Fruit", fruitSchema);
//Mongo will pluralise what we have given the collection name.

const Peach = new Fruit({
  Fname: "Peach",
  rating: 10,
  review: "sdfdsfsdfdsf" 
});

// Peach.save();

// These lines are the replacement of lines from 26 to 56 👇

const kiwi = new Fruit({ //here Fruits means Mangoose Model
  Fname: "Kiwi",
  rating: 10,
  review: "The best 😌"
});

const Banana = new Fruit({
  Fname: "Banana",
  rating: 1,
  review: "I Dont like it"
});

const Orange = new Fruit({ 
  Fname: "Orange",
  rating: 9,
  review: "Im Obessed with it"
});

// Fruit.insertMany([kiwi,Orange,Banana],function(err){
//   if(err){console.log("There is an error");}
//   else{console.log("Succesfully Saved to Fruits DB")}
// })


//----------------------------------------------

//Creating another Schema Person
const personSchema = new mongoose.Schema ({
  Pname : String,
  age : Number,
  favFruit : fruitSchema //We are telling mongoose that we are embeding the fruit doc into the property called favFruit
});

const Person = mongoose.model("Person", personSchema);

//------------------------------------------

const pineapple = new Fruit({
  Fname : "Pineapple",
  rating: 9,
  review: "Great Fruit Actually !!"
});

const Amy = new Person({
  Pname:"Amy",
  age: 31,
  favFruit : pineapple
})

// Amy.save()

//------------------------------------------

const Mango = new Fruit({
  Fname : "Mango",
  rating: 10,
  review: "King Fruit !!"
});

Mango.save();

Person.updateOne({Pname:"Sai Charan"},{favFruit:Mango},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Sucessful");
  }
})

const person = new Person({
  Pname: "Sai Charan",
  age: 19
});


//---------------------------------------------

// Fruit.find(function(err,fruits){
//   if(err){
//     console.log(err);
//   } 
//   else 
//   {

//     // mongoose.connection.close(); 
//     //Closing my Connection after using it.

//     // console.log(fruits);
//     fruits.forEach(function(fruit){
//     console.log(fruit.Fname);
//     });
//   }
// })

//What Exactly here we did is we just runend a foreach loop to console log the Fname.

//---------------------------------------------

// How to Update some changes

// Fruit.updateOne({_id:"What Ever it given"},{Fname: "Peach"},fucntion(err){
//   if(err){
//     console.log("There is an Error")
//   }else{
//     console.log("Succesfully Updated")
//   }
// })

//----------------------------------------------

//Deleting one element 

// Person.deleteOne({Pname: "Sai Charan"},function(err){
//   if(err)
//   {
//     console.log(err);
//   }
//   else{
//     console.log("Sucessfully Deleted");
//   }
// });