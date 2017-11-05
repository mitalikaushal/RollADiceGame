var scores = [0,0];
var roundScore = 0;
var activePlayer = 1;

//hiding the dices
document.querySelector(".dice").style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//button clicking events
document.querySelector('.btn-roll').addEventListener('click', function(){
	//random number
	var dice = Math.floor(Math.random()*6)+1;
	//display result
	var diceDOM = document.querySelector(".dice")
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';


});