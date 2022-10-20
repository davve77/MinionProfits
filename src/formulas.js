// Formulas

function getResults(actionCooldown, itemsPerAction, itemPrice, minionCount, diamProfits){
    
    let calc = ((86400 / actionCooldown * itemsPerAction * itemPrice) + diamProfits) * minionCount
    let results = {
        minute: calc / 1440,
        hour:   calc / 24,
        day:    calc,
        week:   calc * 7,
        month:  calc * 31,
        year:   calc * 365
    }

    return results
}

function calculateBonuses(actionCooldown, fuel, upg1, upg2, extra){
    
    let usingDiamSpread = upg1 == 'diamspreading' || upg2 == 'diamspreading'
    let upgSum = Number(numberCheck(upg1) + numberCheck(upg2))
    let extraSpeed = numberCheck(extra)
    let totalBonuses = 100 + fuel + upgSum + extraSpeed
    let newCooldown = subtractPercent(actionCooldown, totalBonuses)
    let diamProfits = usingDiamSpread ? 138240 / newCooldown : 0

    return {
        cooldown: newCooldown,
        diamProfits: diamProfits,
        bonuses: totalBonuses
    }
}

function numberCheck(num){
    return isNaN(num) ? 0 : num
}

function subtractPercent(sum, percent){
    return sum / ((percent / 100))
}

function beautify(float){
    return Math.round(float).toLocaleString()
}
