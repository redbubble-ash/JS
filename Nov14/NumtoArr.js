/*
Numbers to Arrays and Vice Versa
https://edabit.com/challenge/rufYqKzTLvDefFmKa
*/


function toArray(num) {
	return [...(num.toString())].map(x=>x*1);
}

function toNumber(arr) {
	return arr.join("")*1;
}


//Community solution
// toArray(num){
//     String(num).split('').map(Number);
// }