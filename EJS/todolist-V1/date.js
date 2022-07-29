// module.exports("Hello World")
// //When Ever we write the console.log(date) it will return the Hello World too in the terminal


//How we are able to select by changing this getdate and getday is by exports, exports acts as an object so that we can easily select what we want



// module.exports.getDate = getDate;
// function getDate() From this is this 👇

exports.getDate = function()
{
const today = new Date(); 

// var currentDay = today.getDay();
// // Babu Chukka "new Date()" creates a new date object with the current date and time.
// var day = ""; // An Empty String 

// switch (currentDay) 
// {
//     case 0:
//     day = "Sunday"
//     break;
//     case 1:
//     day = "Monday"
//     break;
//     case 2:
//     day = "Tuesday"
//     break;
//     case 3:
//     day = "Wednesday"
//     break;
//     case 4:
//     day = "Thursday"
//     break;
//     case 5:
//     day = "Friday"
//     break;
//     case 6:
//     day = "Saturday"
//     break;
//     default: console.log("Error He gone Mad !!")
// }

//  Why we commented above method 👆 is because we can have another easy JS Method which simplifies the data if you want to use the above one we can but it wont print complete format we want.

const options = {
weekday: "long",
day: "numeric",
month: "long"
};

const day = today.toLocaleDateString("en-US",options);

return day;

   
    // if (currentDay===6||currentDay===0){
    //     day = "Weekend";
    //     // res.render("list", {kindofday: day});
    // }
    // else{
    //     day = "Weekday";
    //     // res.render("list", {kindofday: day});
    // }

}


exports.getDay = 
function ()
{
const today = new Date(); 
const options = 
    {
    weekday: "long"
    };  
    const day = today.toLocaleDateString("en-US",options);
    
    return day;
}    

