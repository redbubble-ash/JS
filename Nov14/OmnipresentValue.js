/*
Omnipresent Value
https://edabit.com/challenge/Twbmxzd3JwkkqAWES

Create a function that determines whether an input value is omnipresent for a given array.
*/

function isOmnipresent(arr, val) {
	return arr.every(x=>x.includes(val));
}