// const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get("/", function(req,res)
{
  res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res)
{
  const query = req.body.cityName;
  const id = "627dfdb82aa00add5d6f37944faa5046";
  const units = "Metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+units+"&appid="+id;

  https.get(url, function(response) //Its Telling like the callback function gonna give the response.
    {
      console.log(response.statusCode)
      response.on("data", function(data)
      {
          const weatherData = JSON.parse(data)
          const temp = weatherData.main.temp
          const weatherDes = weatherData.weather[0].main
          const icon = weatherData.weather[0].icon
          const imgurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
          // res.send(temp);
          res.write("<p> Weather is currently " + weatherDes + " </p>");
          res.write("<h1> Temperature of "+ query +" is " + temp + " Degree Celcius. </h1>");
          res.write("<img src="+ imgurl +">");
          res.send();
      })
    })
})



app.listen(port, function()
{
  console.log("Mams Nuv ekkada agodhu");
})

