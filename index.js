// Code your solutions in this file

function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr;
}

function tailsNeverFails() {
  let count = 0;
  let coinflip = ()=> Math.random();
//coinflip is function.
//When I call this function, the return value is always different.


//let coinflip = Math.random();
//=> just set the value, so showing the same random number...;


  while(coinflip() >= 0.5){
    console.log(`You got ${count} tails in a row!`);
    count = count += 1
    // coinflip = Math.random() >= 0.5;
  }
  return `You got ${count} tails in a row!`;
}
