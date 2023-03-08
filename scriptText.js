
const urlParams = new URLSearchParams(window.location.search);
const textSize = urlParams.get('textSize');
const body = document.body;
const trainText = document.getElementById('texttrains')
const stopButton = document.getElementById('stop-time-button')


stopButton.addEventListener("click", stopTimer);


//timer methods
let startTime, endTime, elapsedTime;
let timerInterval;
const timer = document.createElement("p");
const size = document.createElement("p");
const lines = document.createElement("p");

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
    //trainText.remove();
    stopButton.remove();
    // displays the time and the text size
    timer.id="timer";
    body.appendChild(timer);
    body.appendChild(size);
    body.appendChild(lines);
    size.textContent= `Schriftgröße: ${textSize}pt`;
    lines.textContent= `Zeichen in der ersten Zeile: ${getfirstLine().length}`;
    console.log(getfirstLine());
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
stopButton.style.fontSize = textSize + 'pt';
startTimer();

//get the number of lines
const textHeight = trainText.scrollHeight;
const textWidth = trainText.scrollWidth;


function getfirstLine(){
    
        const text = trainText.innerHTML;
    
        //set the innerHTML to a character
        trainText.innerHTML= 'a';
        //get the offsetheight of the single character
        const singleLineHeight = trainText.offsetHeight;
        console.log(singleLineHeight);
    
        //split all innerHTML on spaces
        let arr = text.split(' ');
    
        //cur is the current value of the text we are testing to see if
        //it exceeds the singleLineHeight when set as innerHTML
        //prev is the previously tested string that did not exceed the singleLineHeight
        //cur and prev start as empty strings
        let cur = '';
        let prev = '';
    
        //loop through, up to array length
        for (let i = 0; i < arr.length; i++) {
            //examine the rest of text that is not already in previous string
            let restOfText = text.substring(prev.length, text.length);
    
            //the next space that is not at index 0
            const nextIndex =
                restOfText.indexOf(' ') === 0
                    ? restOfText.substring(1, restOfText.length).indexOf(' ') + 1
                    : restOfText.indexOf(' ');
    
            //the next part of the rest of the text
            cur += restOfText.substring(0, nextIndex);
    
            //set the innerHTML to the current text
            trainText.innerHTML = cur;
    
            //now we can check its offsetHeight
            if (trainText.offsetHeight > singleLineHeight) {
                //once offsetHeight of cur exceeds singleLineHeight
                //previous is the first line of text
                //set innerHTML = prev so
                trainText.innerHTML = prev;
                //we can grab the innertext
                let firstLine = trainText.innerText;
                let indexOfSecondLine = prev.lastIndexOf('<');
    
                //reset el
                trainText.innerHTML = '';
    
                return firstLine;
            }
    
            //offsetheight did not exceed singleLineHeight
            //so set previous = cur and loop again
            //prev = cur + ' ';
            prev += cur.substring(prev.length, cur.length);
        
    };
}

