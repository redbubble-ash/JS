/*
Spelling it out
https://edabit.com/challenge/Akgh37c6dccEsNBt6
*/

function spelling(str) {
	let arr = [];
	for(let i = 0; i < str.length;i++){
		arr.push(str.substring(0,i+1));
	}
	return arr;
}

let x = "df";


// community solution
// return str.split('').map((c, i) => str.slice(0, i+1) );