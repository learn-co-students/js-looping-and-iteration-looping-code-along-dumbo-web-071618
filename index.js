// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    // LOG: Welcome Ada! You are employee #1.
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }

  return array;
}

function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let count = 0;

  while (maybeTrue()) {
    count++;
  }
  // => "You got 3 tails in a row!"
  return `You got ${count} tails in a row!`;
}
