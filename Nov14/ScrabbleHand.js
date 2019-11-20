/*
Scrabble Hand
https://edabit.com/challenge/i6YqzHcSiPiEQKjeX
*/


function maximumScore(tileHand) {
	return [...tileHand].map(x=>x.score).reduce((a,b)=>a+b);
}