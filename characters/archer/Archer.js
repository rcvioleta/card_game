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