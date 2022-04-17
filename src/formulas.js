// Formulas from unofficial Wiki


function getResults(actionCooldown, itemsPerAction, itemPrice, bonusSpeed, minionCount, usingDiamSpread){

    let calc = (86400 / (actionCooldown / (1 + bonusSpeed)) * itemsPerAction * itemPrice) * minionCount + (usingDiamSpread ? (138240 / actionCooldown) : 0)
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


function calculateBonuses(fuel, upg1, upg2, extra = 0){
    let usingDiamSpread = upg1 == 'diamspreading' || upg2 == 'diamspreading'
    let fuelUsed = fuel / 100
    let upgrades = (isNaN(upg1) ? 0 : (upg1 / 100)) + (isNaN(upg2) ? 0 : (upg2 / 100))

    return [fuelUsed + upgrades + (extra / 100), usingDiamSpread]
}


function beautify(float){
    return Math.round(float).toLocaleString()
}
