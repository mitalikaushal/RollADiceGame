var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

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
	//update the round if the tolled number is not 1
	if(dice !== 1){
		//Add Score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}
	else {
		//Next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.getElementById('current-0').textContent = "0";
		document.getElementById('current-1').textContent = "0";


		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';

	}


});