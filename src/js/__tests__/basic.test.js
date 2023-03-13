import Team from '../Team';

const char1 = {
  name: 'character1',
  health: 100,
  level: 1,
};
const char2 = {
  name: 'character2',
  health: 100,
  level: 1,
};
const char3 = {
  name: 'character3',
  health: 100,
  level: 1,
};
const team1 = new Team();
team1.add(char1);

test('set test', () => {
  expect(team1.members.size).toBe(1);
  expect(() => (team1.add(char1))).toThrow(Error);
  team1.addAll(char1, char2, char3, char3, 6, 6);
  expect(team1.members.size).toBe(4);
  expect(team1.toArray()).toBeInstanceOf(Array);
});
