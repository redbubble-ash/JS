/*
Map Reduce
https://edabit.com/challenge/yyKv8f4FrZPDaJbDs
*/

var magnitude = vector => {
	return Math.sqrt([...vector].map(x=>x*x).reduce((a,b)=>a+b,0));
}