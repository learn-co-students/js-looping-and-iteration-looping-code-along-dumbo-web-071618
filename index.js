// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array
}

function tailsNeverFails(){
  index = 0;
  function maybeTrue(){
    return Math.random() >= .5;
  }
  while (maybeTrue()){
    index++
  }
  return `You got ${index} tails in a row!`
}
