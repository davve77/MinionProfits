// Minion Presets


var   currentlyActive =   'main'
var   currentlySelected = {}
const presetsBtn =        document.querySelector('#presetsbtn'),
      backBtn =           document.querySelector('#backbtn'),
      mainDiv =           document.querySelector('#main'),
      presetsDiv =        document.querySelector('#presets'),
      presetList =        document.querySelector('#presetlist'),
      selectBtn =         document.querySelector('#selectbtn')


function showPresets(){
    mainDiv.style.removeProperty('animation')
    if(currentlyActive == 'main') return

    hideElm(mainDiv)
    showElm(presetsDiv)
    animateElm(presetsDiv, '.185s fadeDown')
}

function hidePresets(){
    presetsDiv.style.removeProperty('animation')
    if(currentlyActive == 'presets') return

    hideElm(presetsDiv)
    showElm(mainDiv)
    animateElm(mainDiv, '.185s fadeDown')
}

function hideElm(elm){
    elm.style.setProperty('display', 'none', 'important')
}

function showElm(elm){
    elm.style.setProperty('display', 'flex', 'important')
}

function animateElm(elm, anim){
    elm.style.animation = anim
}


mainDiv.addEventListener('animationend', showPresets)
presetsDiv.addEventListener('animationend', hidePresets)
presetsBtn.addEventListener('click', ()=> {
    currentlyActive = 'presets'
    animateElm(mainDiv, '.185s fadeUp')
})
backBtn.addEventListener('click', ()=> {
    currentlyActive = 'main'
    animateElm(presetsDiv, '.185s fadeUp')
})


document.addEventListener('click', e => {

    if(!e.target.className || e.target.className != 'minion-preset') return

    currentlySelected = {
        actionCooldown: e.target.getAttribute('actionCooldown'),
        itemsPerAction: e.target.getAttribute('resources'),
        itemPrice: e.target.getAttribute('itemPrice')
    }

    let oldSelection = document.querySelector('.selected-preset')
    if(oldSelection) oldSelection.classList.remove('selected-preset')
    
    e.target.classList.add('selected-preset')
})

selectBtn.addEventListener('click', ()=> {
    document.querySelector('#actionCooldown').value = currentlySelected.actionCooldown
    document.querySelector('#itemsPerAction').value = currentlySelected.itemsPerAction
    document.querySelector('#itemPrice').value = currentlySelected.itemPrice

    currentlyActive = 'main'
    animateElm(presetsDiv, '.185s fadeUp')
})