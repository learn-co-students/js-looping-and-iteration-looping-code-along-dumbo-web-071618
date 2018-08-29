// Code your solutions in this file
function printBadges (employees) {
  for (let employee=0; employee < employees.length; employee++) {
    console.log(`Welcome ${employees[employee]}! You are employee #${employee+1}.`)
  }
  return employees
};


function tailsNeverFails () {
  function Tails() {
    return Math.random() >= 0.5
  }
  tails = 0
  while (Tails()) {
    tails = tails + 1
  }
  return `You got ${tails} tails in a row!`
};
