/*
Reverse the Case
https://edabit.com/challenge/PTvYKkvf7oytHmJFm

Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
*/

function reverseCase(str) {
	return str.split('').map(x=>reverseChar(x)).join('');
}

function reverseChar(c){
	if(c===c.toUpperCase()) return c.toLowerCase();
	else return c.toUpperCase();
}
