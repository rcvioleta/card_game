(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./characters/archer/Archer":3,"./characters/wizard/Wizard":4}],2:[function(require,module,exports){
const _name = new WeakMap()
const _health = new WeakMap()
const _skills = new WeakMap()

class Character {
    constructor(name) {
        _name.set(this, name)
        _health.set(this, 100)
        this.skills = undefined
    }

    get heroInfo() {
        return {
            name: _name.get(this),
            health: this.health,
            skills: this.skills
        }
    }

    get health() {
        return _health.get(this)
    }

    set health(newHealth) {
        _health.set(this, newHealth)
    }

    set skills(skillset) {
        _skills.set(this, skillset)
    }

    get skills() {
        return _skills.get(this)
    }
}

module.exports = Character
},{}],3:[function(require,module,exports){
const Character = require('../Character')

const _skills = new WeakMap()

class Archer extends Character {
    constructor(name) {
        super(name)
        _skills.set(this, [
            { name: 'tripple shot', damage: 5 },
            { name: 'wild shot', damage: 10 },
            { name: 'star fall', damage: 15 },
            { name: 'arrow storm', damage: 20 },
            { name: 'dance of death', damage: 25 },
        ])
        super.skills = _skills.get(this)
    }
}

module.exports = Archer
},{"../Character":2}],4:[function(require,module,exports){
const Character = require('../Character')

const _skills = new WeakMap()

class Wizard extends Character {
    constructor(name) {
        super(name)
        _skills.set(this, [
            { name: 'lumos', damage: 5 },
            { name: 'expelliarmus', damage: 10 },
            { name: 'alohomora', damage: 15 },
            { name: 'expecto partonum', damage: 20 },
            { name: 'avada kedavra', damage: 25 }
        ])
        super.skills = _skills.get(this)
    }
}

module.exports = Wizard
},{"../Character":2}]},{},[1]);
