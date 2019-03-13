
// Setting variables for clock operations
function showTime(){
    var date = new Date();
    // Setting Hours
    var h = date.getHours(); // 0-23hrs
    // Setting Minutes
    var m = date.getMinutes(); // 0-59 min
    // Setting Seconds
    var s = date.getSeconds(); // 0-59 sec

// Generate where the javascript will take place, in this case it will be in the clockDisplay Div.

//will not work in firefox
document.getElementById("#clockDisplay").innerHTML = time;
//wont work in internet explorer
document.getElementById("clockDisplay").textContent = time;

}

showTime();