// Code your solutions in this file
function tailsNeverFails(){
  let bool = true;
  let count = 0;
  while (bool){
    if (Math.random() <= .5) {
      count++
    } else {
      return `You got ${count} tails in a row!"`;
    }
  }
}
