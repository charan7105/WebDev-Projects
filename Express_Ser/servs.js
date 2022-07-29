const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) 
{
  res.send('Hello World!');
});

app.get("/Contact", function(req,res){
  res.send("Contact me by mailing to saicharan123@gmail.com");
});

app.get("/About", function(req,res){
  res.send("Hi this is sai charan venna, who is currently a Manager at csi chapter VIT-AP University <br> Pora Pumka")
});

app.get("/KEke", function(req,res){
  res.send("Just Test sesa ante")
});

app.listen(port, function() 
{
  console.log(`Example app listening on port ${port}`);
});