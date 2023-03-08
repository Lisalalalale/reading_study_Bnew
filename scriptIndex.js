
const textSizeInput = document.getElementById("text-size-input");
const loremIpsum = document.getElementById("lorem-ipsum");
const infotext = document.getElementById("info-text")
const textToggleButton = document.getElementById("text-toggle-button");
loremIpsum.style.fontSize = textSizeInput.value + "pt";
  infotext.style.fontSize = textSizeInput.value + "pt";
  textToggleButton.style.fontSize = textSizeInput.value + "pt";


textSizeInput.addEventListener("input", function(event) {
  loremIpsum.style.fontSize = textSizeInput.value + "pt";
  infotext.style.fontSize = textSizeInput.value + "pt";
  textToggleButton.style.fontSize = textSizeInput.value + "pt";
  
});




textToggleButton.addEventListener("click", changeToText);
console.log(`textB.html?textSize= ${textSizeInput.value}`);


function changeToText() {
  
  window.location.href = `textB.html?textSize= ${textSizeInput.value}`;
}
