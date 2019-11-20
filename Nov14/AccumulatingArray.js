/*
Accumulating Array
https://edabit.com/challenge/FkH4K9TpFG98t52Ex

Create a function that takes in an array and returns an array of the accumulating sum.
*/

function accumulatingArray(arr) {
	return arr.map((el,idx)=>arr.slice(0,idx+1).reduce((a,b)=>a+b));
}