/*
Get Student Top Notes
https://edabit.com/challenge/b7dXbWEhbr3bXCk7i
*/

function getStudentTopNotes(students) {
	return students.map(s=>s.notes.reduce((a,b)=>a>b?a:b,0));
}