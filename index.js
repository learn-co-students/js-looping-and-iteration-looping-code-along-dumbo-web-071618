// Code your solutions in this file

function printBadges(array_names) {
  for(let i = 0; i < array_names.length; i++) {
    console.log(`Welcome ${array_names[i]}! You are employee #${i + 1}.`)
  }
  return array_names
}

function tailsNeverFails() {
  let count = 0;
  while (Math.random() >= .5) {
    count++
  }
  return `You got ${count} tails in a row!`
}
