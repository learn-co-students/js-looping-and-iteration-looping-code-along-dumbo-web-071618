// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

function printBadges(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
  }
  return arr
}

function coinFlip() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  count = 0
  while(coinFlip()) {
    count++
  }
  return `You got ${count} tails in a row!`
}
