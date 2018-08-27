// Code your solutions in this file

printBadges = (employeeArr) => {
  for (let i = 0; i < employeeArr.length; i++){
    console.log(`Welcome ${employeeArr[i]}! You are employee #${i + 1}.`)
  }
  return employeeArr
}

// printBadges(['Ada', 'Brendan', 'Ali']);

tailsNeverFails = () => {
  let tails = 0;

  flip = () => {
    return Math.random() >= .5
  }
  while (flip() ){
    if (flip){
      tails++
    }
  }
  return `You got ${tails} tails in a row!`
}
