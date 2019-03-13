// Creating a variable for clock, and grabbing it by the div ID.
var clock = document.getElementById('clockDisplay');

// getHours gives the hours divided by 12.
    // console.log(time.getHours() % 12);
    // console.log(time.getMinutes());
    // console.log(time.getSeconds());

// Function to run the clock
function digClock (){
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours.length < 2){
        hours = '0' + hours ;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    // clock string
    var clockStr = hours + " : " + minutes + " . " + seconds;

    clock.textContent = clockStr;
}

// Call the function once, so it doesn't skip the first second
digClock();
// To run the function every second thereafter.
setInterval(digClock, 1000);

// Current Date

var today = new Date();
var dd = today.getDate();
var mm =  today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10){
    mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

