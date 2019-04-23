const setMeteorShower = heroState => ({
    meteorShower: enemyState => {
        const damage = Math.floor(Math.random() * 11)
        return Object.assign({}, enemyState, { health: enemyState.health -= damage })
    }
})

const setBowlingBash = heroState => ({
    bowlingBash: enemyState => {
        const damage = Math.floor(Math.random() * 11)
        Object.assign({}, enemyState, { health: enemyState.health -= damage })
        return {
            damage
        }
    }
})

const setCheckDamage = heroState => ({
    checkDamageTaken: () => {
        const cache = {
            Robinhood: { health: 100 },
            Lancelot: { health: 100 }
        }
        if (heroState.name in cache) {
            if (cache[heroState.name].health === heroState.health) {
                return `${heroState.name} dodge the attack!`
            } else {
                const updatedCache = Object.assign({}, cache)
                updatedCache[heroState.name].health = heroState.health
                return updatedCache[heroState.name].health
            }
        } else {
            cache[heroState.name] = { health: heroState.health }
            return cache[heroState.name]
        }
    }
})

const Archer = name => {
    const state = {
        name,
        health: 100
    }
    return Object.assign(state, setMeteorShower(state), setCheckDamage(state))
}

const Knight = name => {
    const state = {
        name,
        health: 100
    }
    return Object.assign(state, setBowlingBash(state), setCheckDamage(state))
}

const robinhood = Archer('Robinhood')
const lancelot = Knight('Lancelot')

lancelot
robinhood

const gameplay = setInterval(() => {
    lancelot.bowlingBash(robinhood)
    console.log('robinhood damage', robinhood.checkDamageTaken())
    console.log('robinhood health', robinhood.health)

    robinhood.meteorShower(lancelot)
    console.log('lancelot damage', lancelot.checkDamageTaken())
    console.log('lancelot health', lancelot.health)

    if (lancelot.health <= 0 && robinhood.health <= 0) {
        clearInterval(gameplay)
        console.log('We have a tie!')
        return
    } else if (lancelot.health > 0 && robinhood.health <= 0) {
        clearInterval(gameplay);
        console.log(`${lancelot.name} wins!`)
        return
    } else if (robinhood.health > 0 && robinhood.health <= 0) {
        clearInterval(gameplay)
        console.log(`${robinhood.name} wins!`)
        return
    }
}, 1000)


lancelot
robinhood

