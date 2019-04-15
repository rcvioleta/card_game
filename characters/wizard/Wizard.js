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