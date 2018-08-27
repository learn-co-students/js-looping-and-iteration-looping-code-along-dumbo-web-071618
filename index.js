// Code your solutions in this file



function printBadges(array){

let number = 1

 for (let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${number++}.`);
  }

  return array;
}

function tailsNeverFails(){
  let number = 0



  while (Math.random() >= 0.5){
    console.log(`You got tails ${number++} times`);
  }
  //8

return `You got ${number} tails in a row!`

}
