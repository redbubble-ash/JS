/*
Read, Set... Get!
https://edabit.com/challenge/2FF7RKw9RLwc3EBY9
*/

class Challenge {
	constructor(id, level) {
		this.id = id;
		this.level = level;
	}
	get points() {
		let levels = {VE: 5, EA: 10, ME: 20, HA: 40, VH: 80, EX: 120};
		return levels[this.level];
	}
}


class User {
	constructor(name, xp, log) {
		this.name = name;
		this.xp = xp;
		this.log = log;
	}
	 newSolvedChallenge(challenge) {
		this.log.push(challenge.id);
		this.xp += challenge.points;
	}
}

const challenge1 = new Challenge(1, "VE"),
			challenge2 = new Challenge(2, "EA"),
			challenge3 = new Challenge(3, "ME"),
			challenge4 = new Challenge(4, "HA"),
			challenge5 = new Challenge(5, "VH"),
			challenge6 = new Challenge(6, "EX"),
			user1 = new User("Madam", 0, []),
			user2 = new User("Steve", 0, []);

user1.newSolvedChallenge = challenge1;
user1.newSolvedChallenge = challenge4;
user1.newSolvedChallenge = challenge6;
user2.newSolvedChallenge = challenge5;
user2.newSolvedChallenge = challenge3;
user2.newSolvedChallenge = challenge2;