/*
H4ck3r Sp34k
https://edabit.com/challenge/cada8J3AWGRhwQhkk
*/

function hackerSpeak(str) {
	return [...str].map(x=>{
		if(x=='a')return 4;
		if(x=='e')return 3;
		if(x=='i')return 1;
		if(x=='o')return 0;
		if(x=='s')return 5;
		return x;
	}).join('');
}


// Community solution
// function hackerSpeak(str) {
//     var chars = {'a':'4','e':'3','i':'1', 'o':'0', 's':'5'};
//     str = str.replace(/[aeios]/g, letter => chars[letter]);
    
//     return str;
//   }