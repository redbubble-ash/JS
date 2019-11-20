/*
Transform into an Array with No Duplicates


Create a function that transforms an array into a set.
*/



function set(arr) {
	return Array.from(new Set(arr));
}



// Community Solution
// return [...new Set(arr)];