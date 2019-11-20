/*
A Redundant Function
https://edabit.com/challenge/hzxN9bAebBPNqdQto

Write a function redundant that takes in a string str and returns a function that returns str.
*/

function redundant(str) {
	return function(){
		return str;
	};
}


// community solution
// return ()=>str;

// return function(){return str;};

// return ()=>{return str};

// const redundant = s => () => s;