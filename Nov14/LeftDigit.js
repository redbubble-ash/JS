/*
Most Left Digit
https://edabit.com/challenge/tPvx6pgPmerPrwqM8

Write a function that takes a string as an argument and returns the left most digit in the string.
*/


function leftDigit(num) {
	return Number([...num].find(x=> !isNaN(x)));
}