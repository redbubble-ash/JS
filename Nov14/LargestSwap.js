/*
Largest Swap

Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
*/

function largestSwap(num) {
	return num >= num%10*10+Math.trunc(num/10);
}