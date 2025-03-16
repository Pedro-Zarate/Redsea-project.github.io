


//container
const nisoTang = document.querySelector('.nisoTang')
const bTang = document.querySelector('.bTang')
const clown = document.querySelector('.clown')


const fairyW = document.querySelector('.fairyW')
const mandarin = document.querySelector('.mandarin')
const eGoby = document.querySelector('.eGoby')
const blueWrasse = document.querySelector('.blueWrasse')
const anthias = document.querySelector('.anthias')
const starfish = document.querySelector('.starfish')

//box
document.querySelector('#box-text1').addEventListener('click',nisoTangNext)
document.querySelector('#box-text2').addEventListener('click',bTangNext)
document.querySelector('#box-text3').addEventListener('click',clownNext)

document.querySelector('#box-text4').addEventListener('click',fairyWNext)
document.querySelector('#box-text5').addEventListener('click',mandarinNext)
document.querySelector('#box-text6').addEventListener('click',eGobyNext)

document.querySelector('#box-text7').addEventListener('click',blueWrasseNext)
document.querySelector('#box-text8').addEventListener('click',anthiasNext)
document.querySelector('#box-text9').addEventListener('click',starfishNext)



function nisoTangNext(){
    nisoTang.classList.toggle('hidden')
    bTang.classList.add('visible')
    clown.classList.add('visible')
    fairyW.classList.add('visible')
    mandarin.classList.add('visible')
    eGoby.classList.add('visible')
    blueWrasse.classList.add('visible')
    anthias.classList.add('visible')
    starfish.classList.add('visible')

}

function bTangNext(){
    nisoTang.classList.add('visible')
    bTang.classList.toggle('hidden')
    clown.classList.add('visible')
    fairyW.classList.add('visible')
    mandarin.classList.add('visible')
    eGoby.classList.add('visible')
    blueWrasse.classList.add('visible')
    anthias.classList.add('visible')
    starfish.classList.add('visible')

}

function clownNext(){
    nisoTang.classList.add('visible')
    bTang.classList.add('visible')
    clown.classList.toggle('hidden')
    fairyW.classList.add('visible')
    mandarin.classList.add('visible')
    eGoby.classList.add('visible')
    blueWrasse.classList.add('visible')
    anthias.classList.add('visible')
    starfish.classList.add('visible')
  
}


function fairyWNext(){
    fairyW.classList.toggle('hidden')
    nisoTang.classList.add('visible')
    bTang.classList.add('visible')
    clown.classList.add('visible')
    mandarin.classList.add('visible')
    eGoby.classList.add('visible')
    blueWrasse.classList.add('visible')
    anthias.classList.add('visible')
    starfish.classList.add('visible')

}
function mandarinNext(){
    mandarin.classList.toggle('hidden')
    nisoTang.classList.add('visible')
    bTang.classList.add('visible')
    clown.classList.add('visible')
    fairyW.classList.add('visible')
    eGoby.classList.add('visible')
    blueWrasse.classList.add('visible')
    anthias.classList.add('visible')
    starfish.classList.add('visible')
}
function eGobyNext(){
    eGoby.classList.toggle('hidden')
    nisoTang.classList.add('visible')
    bTang.classList.add('visible')
    clown.classList.add('visible')
    fairyW.classList.add('visible')
    mandarin.classList.add('visible')
    blueWrasse.classList.add('visible')
    anthias.classList.add('visible')
    starfish.classList.add('visible')
}
function blueWrasseNext(){
    blueWrasse.classList.toggle('hidden')
    nisoTang.classList.add('visible')
    bTang.classList.add('visible')
    clown.classList.add('visible')
    fairyW.classList.add('visible')
    mandarin.classList.add('visible')
    eGoby.classList.add('visible')
    anthias.classList.add('visible')
    starfish.classList.add('visible')
}
function anthiasNext(){
anthias.classList.toggle('hidden')
fairyW.classList.add('visible')
nisoTang.classList.add('visible')
bTang.classList.add('visible')
clown.classList.add('visible')
mandarin.classList.add('visible')
eGoby.classList.add('visible')
blueWrasse.classList.add('visible')
starfish.classList.add('visible')

}
function starfishNext(){
starfish.classList.toggle('hidden')
fairyW.classList.add('visible')
nisoTang.classList.add('visible')
bTang.classList.add('visible')
clown.classList.add('visible')
mandarin.classList.add('visible')
eGoby.classList.add('visible')
blueWrasse.classList.add('visible')
anthias.classList.add('visible')
}



