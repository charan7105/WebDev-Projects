// var name = "Sai Charan"
// name.slice(0,4)

// ------------------------------------------------------------------------------------------------

// var twitter = prompt("Enter Your Tweet");
// twitter.slice(0,4);

// ------------------------------------------------------------------------------------------------

// var name = prompt("Ni peru Tagalpettu");
// name = name.toUpperCase(0);

// ------------------------------------------------------------------------------------------------

// Changing Name First Letter Into Captial

// Step1
// var name = prompt("Enter Your Name");
// Step2
// var firstletter = name.slice(0,1);
// var Uppercase1 = firstletter.toUpperCase();
// var lowertext = name.slice(1,name.lenght);
// var Fullname = Uppercase1+lowertext;
// Step3
// alert("Erripappa Ni peru vachesariki "+Fullname+" Inka ni peru cheppan kada elli padko")

// ------------------------------------------------------------------------------------------------

// Predicting Dog Age

// var dogage = prompt("Enter the dog age");
// var Humanage = (dogage-2)*4+21;
// alert("Human Age is : "+Humanage);

// ------------------------------------------------------------------------------------------------

//  Telling no of bottles one can buy through Functions

//     function getMilk(Money) 
//   {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     var noofbottles = Math.floor(Money/1.5);
//     console.log("You can Buy "+noofbottles+" Bottles.")
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

// ------------------------------------------------------------------------------------------------

// How many days we live task (Targer : 90 Yrs)

// function lifeInWeeks(age) 
// {
//     var finalage = 90-age;
//     var days = finalage*365;
//     var weeks = finalage*52;
//     var months = finalage*12;
//     console.log("Hey Pumka Still you have "+ days + " Days "+weeks+" Weeks "+months+ " Months Remaining.")
// }

// ------------------------------------------------------------------------------------------------

// BMI Calculator

// function bmiCalculator(weight,height)
// {
//   var bmi = weight/(height*height);
//   return bmi;
// }

// function bmiCalculator(weight,height)
// {
//   var bmi = weight/(height*height);
//   return Math.round(bmi);
// }
// var bmi = bmiCalculator(100,4)
// alert(bmiCalculator(100,2));

// ------------------------------------------------------------------------------------------------

//Love Percentage Calculator

// var hisname = prompt("Enter His Name 🙍‍♂️");
// var hername = prompt("Enter Her Name 🙍‍♀️");
// var n = Math.random();
// n = n*100;
// n = Math.floor(n)+1;
// alert (hisname+" and your love "+hername+" love percentage is "+n+"%.")

// ------------------------------------------------------------------------------------------------

// BMI ADVANCE USING IF ELSE

// function bmiCalculator(weight,height) 
// {
//   var bmi = Math.round(weight / Math.pow(height,2));
//   var interpretation;  
//   if (bmi < 18.5) 
//   {
//   interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//   }
//   if (bmi >= 18.5 && bmi < 24.9) 
//   {
//   interpretation ="Your BMI is " + bmi + ", so you have a normal weight.";
//   }
//   if (bmi >= 25) 
//   {
//   interpretation ="Your BMI is " + bmi + ", so you are overweight.";
//   }
//   return interpretation;
// }

// ------------------------------------------------------------------------------------------------

// LeapYear Finder 

// function isLeop(year) 
// {
//   if (year % 4 === 0)
//   {
//    if (year % 100 === 0) 
//    {
//     if (year % 400 === 0)
//     { return "Its a Leap Year."; }
//     else
//     { return "Its not a leap Year."; }
//    }
//    else
//    { return"Its a Leap Year."; }
//   }
//   else
//   { return "It's Not a Leap Year."; }
// }

// ------------------------------------------------------------------------------------------------

// Fizzbuzz Problem

// var output = [];
// var count = 1;

// function Fizzbuzz() 
// {
// if(count%3===0&& count%5===0){
//     output.push("FizzBuzz");
// }
// else if(count%3===0){
//     output.push("Fizz");
// }
// else if(count%5===0){
//    output.push("Buzz");
//    output.push(count);
// }
// else{
//   output.push(count);
// }
//   count++;
//   console.log(output);
// }

// ------------------------------------------------------------------------------------------------

// 0,1,0+1=1,1+1=2,2+1=3........Series Generator

// function fibonacciGenerator (n) {

//   var output=[];
//   if (n===1)
//   {
//       output=[0];
//   }
//   else if (n===2)
//   {
//       output=[0,1];
//   }
//   else
//   {
//       output=[0,1];
//       for (var i=2;i<n;i++) 
//       {
//           output.push(output[output.length-2]+output[output.length-1]);
//       }
//   }
//   return output;
// }

// ------------------------------------------------------------------------------------------------

// Constructor Function

// function HouseCleanings(name,age,workpurpose,experince) {
//     this.name = name;
//     this.age = age;
//     this.workpurpose = workpurpose;
//     this.experince = experince;
// }

// var houseCleaning1 = new HouseCleanings ("surekha",19,["Cleaning","serving"],5.3)
// var houseCleaning1 = new HouseCleanings ("surekha",19,["Cleaning","serving"],5.3)

// ------------------------------------------------------------------------------------------------
