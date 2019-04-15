const Character = require('../Character')

const _skills = new WeakMap()

class Knight extends Character {
    constructor(name) {
        super(name)
        _skills.set(this, [
            { name: 'bowling bash', damage: 5 },
            { name: 'cavalry combat', damage: 10 },
            { name: 'aura blade', damage: 15 },
            { name: 'true strike', damage: 20 },
            { name: 'dancing blade', damage: 25 }
        ])
        super.skills = _skills.get(this)
    }
}

module.exports = Knight
