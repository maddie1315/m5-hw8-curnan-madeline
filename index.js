// Create an Array of at least 3 losing messages
var losingMessages = [
    'better luck next time',
    'try again',
    'nope, not that one'
]

// Create variables to count wins and losses
var winCount = 0
var lossCount = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageElement = document.getElementById('message')
var winElement = document.getElementById('wins')
var lossElement = document.getElementById('losses')

winElement.textContent = 'Wins: ' + winCount++;
lossElement.textContent = 'Losses: ' + lossCount++;

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
var winningNum = Math.floor((Math.random() * 3) + 1);
console.log(winningNum);

// target all .box elements and attach a click event listener to each one using a loop
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
var boxElements = document.querySelectorAll('.box')

for (let i = 0; i < boxElements.length; i++) {
    var boxElement = boxElements[i];
    boxElement.onclick = function(event) {
        var boxNumberWasClicked = event.target.textContent;
        console.log(parseInt(boxNumberWasClicked, 10));
        if (winningNum == boxNumberWasClicked) {
            messageElement.textContent = 'congrats, you won!',
            winElement.textContent = 'Wins: ' + winCount++;
        } else {
            messageElement.textContent = losingMessages[Math.floor((Math.random() * losingMessages.length))];
            lossElement.textContent = 'Losses: ' + lossCount++;
        }
    }
}

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses