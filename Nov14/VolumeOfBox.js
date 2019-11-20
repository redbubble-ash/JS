/*
Volume of a Box
https://edabit.com/challenge/ms3q5GYSpFpwxeFWX
*/

function volumeOfBox(sizes) {
	return [...Object.values(sizes)].reduce((a,b)=>a*b,1);
}


// Note: Object.values(obj)