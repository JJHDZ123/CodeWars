/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
*/

function score(dice) {
	let points = 0;
	let ones = 0;
	let twos = 0;
	let threes = 0;
	let fours = 0;
	let fives = 0;
	let sixes = 0;

	dice.forEach(function(roll) {
		if (roll === 1) {
			ones++;
			if (ones === 3) {
				points += 1000;
				ones = 0;
			}
		}

		if (roll === 5) {
			fives++;
			if (fives === 3) {
				points += 500;
				fives = 0;
			}
		}
		if (roll === 2) twos++;
		if (roll === 3) threes++;
		if (roll === 4) fours++;
		if (roll === 6) sixes++;
	});

	points += ones * 100;
	points += fives * 50;

	if (sixes >= 3) points += 600;
	if (fours >= 3) points += 400;
	if (threes >= 3) points += 300;
	if (twos >= 3) points += 200;

	return points;
}
