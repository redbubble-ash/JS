/*
Hashes and Pluses
Create a function that returns the number of hashes and pluses in a string.
*/

function hashPlusCount(str) {
	let numHash = [...str].filter(i=>i==="#").length;
	return [numHash, str.length - numHash];
}



// Community solution
// function hashPlusCount(str) {
// 	return [str.split('+').join('').length, str.split('#').join('').length]
// }

