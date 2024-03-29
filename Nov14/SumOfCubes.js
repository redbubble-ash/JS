/*
Sum of Cubes
Create a function that takes in an array of numbers and returns the sum of its cubes.
*/

function sumOfCubes(nums) {
	if(nums.length===0)return 0;
	
	return nums.reduce((a,b)=>a+b*b*b,0);
}