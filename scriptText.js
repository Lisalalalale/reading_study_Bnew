
const urlParams = new URLSearchParams(window.location.search);
const textSize = urlParams.get('textSize');
console.log(textSize)
const body = document.body;
const trainText = document.getElementById('texttrains')
const stopButton = document.getElementById('stop-time-button')

stopButton.addEventListener("click", stopTimer);


//timer methods
let startTime, endTime, elapsedTime;
let timerInterval;
const timer = document.createElement("p");
const size = document.createElement("p");

function startTimer() {
// Store the start time
startTime = new Date();

// Start the timer
timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
// Stop the timer
clearInterval(timerInterval);
//removes the train texts and the button
trainText.remove();
stopButton.remove();
// displays the time and the text size
timer.id="timer";
body.appendChild(timer);
body.appendChild(size);
size.textContent=textSize;
// Format the time as HH:MM:SS

const hours = Math.floor(elapsedTime / 3600);
const minutes = Math.floor((elapsedTime % 3600) / 60);
const seconds = elapsedTime % 60;
const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
console.log(formattedTime)
document.getElementById("timer").innerHTML =`Zeit: ${elapsedTime}s`  ;
}

function updateTimer() {
// Calculate the elapsed time
endTime = new Date();
elapsedTime = Math.floor((endTime - startTime) / 1000);


}

function pad(value) {
// Add leading zeros to single-digit values
return value < 10 ? `0${value}` : value;
}

trainText.style.fontSize = textSize + 'pt';
startTimer();



