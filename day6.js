const parsed = [[54, 446], [81, 1292], [70, 1035], [88, 1007]];
const winners = [0, 0, 0, 0];
for (let raceIndex = 0; raceIndex < parsed.length; raceIndex++) {
  for (let pressedTime = 1; pressedTime < parsed[raceIndex][0]; pressedTime++) {
    if (pressedTime * (parsed[raceIndex][0] - pressedTime) > parsed[raceIndex][1]) {
      winners[raceIndex]++;
    }
  }
}
console.log(winners[0]*winners[1]*winners[2]*winners[3]);

// part 2

const parsed2 = [54817088, 446129210351007];
let winners2 = 0;
for (let pressedTime = 1; pressedTime <= parsed2[0]; pressedTime++) {
  if (pressedTime * (parsed2[0] - pressedTime) > parsed2[1]) {
    winners2++;
  }
}
console.log(winners2);
