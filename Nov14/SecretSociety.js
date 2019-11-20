/*
Secret Society
https://edabit.com/challenge/zQm9YZTTFPhNtYjDr
*/

function societyName(friends) {
    return friends.map(s=>s.charAt(0)).sort().join('');
    
}