
// let currentDate = new Date();
// console.log(currentDate);


// currentDate.setFullYear(2030);     
// currentDate.setMonth(11);          
// currentDate.setDate(25);          
// currentDate.setHours(10);          
// currentDate.setMinutes(30);        
// currentDate.setSeconds(2);     

// console.log(currentDate);



// function myconsole() {
//     console.log("Hello World");

// }
// setInterval(myconsole, 1000); // Call myconsole every 1 second (1000 milliseconds)
function updateclock(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let currentDate = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = currentDate;
}
setInterval(updateclock, 1000); // Call myconsole every 1 second (1000 milliseconds)