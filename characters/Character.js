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