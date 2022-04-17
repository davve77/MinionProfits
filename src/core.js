// Main Script


function calculate(){

    const actionCooldown =      parseFloat(document.querySelector('#actionCooldown').value),
          itemsPerAction =      parseFloat(document.querySelector('#itemsPerAction').value),
          itemPrice =           parseFloat(document.querySelector('#itemPrice').value),
          bonus =               parseFloat(document.querySelector('#bonus').value),
          fuel =                parseFloat(document.querySelector('#fuel').value),
          upgrade1 =            document.querySelector('#upgrade1').value,
          upgrade2 =            document.querySelector('#upgrade2').value,
          minionCount =         parseFloat(document.querySelector('#minionCount').value),
          noResults =           document.querySelector('#noresults'),
          results =             document.querySelector('#results')

    let allBonuses = calculateBonuses(fuel, upgrade1, upgrade2, bonus)
    let profits = getResults(actionCooldown, itemsPerAction, itemPrice, allBonuses[0], minionCount, allBonuses[1])

    if(isNaN(profits.day)) return

    noResults.style.display = 'none'
    results.style.removeProperty('display')

    document.querySelector('#minute').lastChild.textContent = beautify(profits.minute)
    document.querySelector('#hour').lastChild.textContent = beautify(profits.hour)
    document.querySelector('#day').lastChild.textContent = beautify(profits.day)
    document.querySelector('#week').lastChild.textContent = beautify(profits.week)
    document.querySelector('#month').lastChild.textContent = beautify(profits.month)
    document.querySelector('#year').lastChild.textContent = beautify(profits.year)
}


document.querySelector('#calcbtn').addEventListener('click', calculate)
document.addEventListener('keydown', e => {
    if(e.key == 'Enter') calculate()
})
