/*
Negative Image
https://edabit.com/challenge/uNzzNQPDQferAAGMc
*/

function reverseImage(image) {
	return image.map(x=>x.map(x=>x==1?0:1));
}

// community solution
// function reverseImage(image) {
// 	return image.map(v => v.map(x => +!x));   // turn into bool and then number
// }

