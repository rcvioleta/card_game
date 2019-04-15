const Archer = require('./characters/archer/Archer')
const Wizard = require('./characters/wizard/Wizard')

const merlin = new Wizard('Merlin')

let playerName

while (!playerName) {
    playerName = prompt('Hey! Please introduce yourself:')
}

const robinHood = new Archer(playerName)

console.log(`Welcome ${playerName}!`)
console.log('%c These will be your attributes', 'font-family: Monaco; color: green; font-weight: bolder;')
console.log(robinHood.heroInfo)