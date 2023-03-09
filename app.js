//STOPWATCH

//To-Do: Secondtimer when on 0 shows 60  | FIXED
//To-Do: shows 100th millisecond therfore making the clock look laggy but other wise it would be desynced | FIXED

//html buttons
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')


// variablen delcaration 
let millieseconds = 00
let seconds = 00
let minutes = 00
let interval // works without this var 
let nameChangeStart = "Resume"
let nameChange2 = "Start"


//Start Button
start.addEventListener('click', function () {
    interval = setInterval(starttimer, 10),
        starttimer
    document.querySelector('#start').disabled = true;
    document.querySelector('#start').innerHTML = nameChange2
})


//Stop Button
stop.addEventListener('click', function () {
    clearInterval(interval)
    document.querySelector('#start').disabled = false;
    document.querySelector('#start').innerHTML = nameChangeStart
    if (millieseconds == 0) {                                         //so it wont be called "Resume" when on 00:00:00
        document.querySelector('#start').innerHTML = nameChange2
    }
})


//Reset Button
reset.addEventListener('click', function () {

    clearInterval(interval)
    millieseconds = 0
    seconds = 0
    minutes = 0

    document.getElementById("millieseconds").innerHTML = "0" + millieseconds
    document.getElementById("seconds").innerHTML = "0" + seconds
    document.getElementById("minutes").innerHTML = "0" + minutes
    document.querySelector('#start').disabled = false;
    document.querySelector('#start').innerHTML = nameChange2
})


//Timer function
function starttimer() {
    millieseconds++
    if (millieseconds <= 9) {
        document.getElementById("millieseconds").innerHTML = "0" + millieseconds
    }
    if (millieseconds > 9) {
        document.getElementById("millieseconds").innerHTML = millieseconds
    }
    if (millieseconds > 99) {
        document.getElementById("millieseconds").innerHTML = "00"
        seconds++
        millieseconds = 0
        console.log("Seconds: " + seconds)

        if (seconds <= 9) {
            document.getElementById("seconds").innerHTML = "0" + seconds
        }

        if (seconds > 9) {
            document.getElementById("seconds").innerHTML = seconds
        }

        if (seconds > 59) {
            document.getElementById("seconds").innerHTML = "00"
            minutes++
            seconds = 00
            console.log("Minutes: " + minutes)
        }
        if (minutes <= 9) {
            document.getElementById("minutes").innerHTML = "0" + minutes
        }
        if (minutes > 9) {
            document.getElementById("minutes").innerHTML = minutes
        }
    }
}





