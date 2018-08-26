function printBadges(arr) {
    for(let i = 0; i < arr.length; i++)   {
        console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
    }
    return arr
}

function coinFlip () {
    return Math.random() >= 0.5;
  }

function tailsNeverFails()  {
    count = 0
    while(coinFlip()) {
        count++
    }
    return `You got ${count} tails in a row!`
}