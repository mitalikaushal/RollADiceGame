var scores = [0,0];
var roundScore = 0;
var activePlayer = 1;
//calculating the random number from 1 to 6
var dice = Math.floor(Math.random()*6)+1;
//selecting the specific id and changing its text and assigning the random number
document.querySelector("#current-" +activePlayer).textContent = dice;

var dices = document.querySelectorAll(".dice");
dices.forEach( function(dice, i) {
	// statements
	dice.style.display ='none';
});
