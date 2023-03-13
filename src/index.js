// import './css/style.css';

// import './js/app';

// TODO: write your code in app.js

class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else throw new Error('Character already exists!');
  }

  addAll(...characters) {
    for (const iterator of characters) {
      this.members.add(iterator);
    }
    console.log('команда');
    console.log(this.members);
    console.log(this.members.size);
  }

  toArray() {
    return Array.from(this.members);
  }
}
const char1 = {
  name: 'character1',
  health: 100,
  level: 1,
};
const char2 = {
  name: 'character2',
  health: 100,
  level: 2,
};
const char3 = {
  name: 'character3',
  health: 100,
  level: 5,
};

const team1 = new Team();

console.log(team1.add(char1));
console.log(team1.members.size);
team1.add(char2);
console.log(team1);
team1.addAll(char1, char2, char3, char3, 6, 6);
console.log(team1);
console.log(team1.toArray());
