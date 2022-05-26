function computerPlay(){
    let arr = ['r','p','s']
    let num = Math.floor(Math.random()*3)
    return  arr[num]

}
function playRound(playerPlay){
    let comp = computerPlay()
    if (comp === playerPlay){
        return 'D'
    }
    if (comp == 's' && playerPlay == 'r' || comp == 'r' && playerPlay == 'p' || comp == 'p' && playerPlay=='s'){
        return 'W'
    }
    if (comp == 's' && playerPlay == 'p' || comp == 'r' && playerPlay == 's' || comp == 'p' && playerPlay=='r'){
        return 'L'
    }
}

let button1 = document.querySelector('.r')
let button2 = document.querySelector('.p')
let button3 = document.querySelector('.s')
let button4 = document.querySelector('.n')
let pscore = document.querySelector('.pscore')
let cscore = document.querySelector('.cscore')
let ds = document.querySelector('.d')
let plscore = 0
let clscore = 0
let d = 0
let wl = document.querySelector('.wl')



button1.addEventListener('click', () => {
    if (plscore == 5 || clscore == 5){
        return
    }
    let s = playRound('r')
    if (s == 'W'){
        plscore++
    }
    if (s == 'L'){
        clscore++
    }
    if (s == 'D'){
        d++
    }
pscore.textContent = `Player score: ${plscore}`;
cscore.textContent = `Computer score: ${clscore}`;
ds.textContent = `Draws: ${d}`;
if (plscore == 5){
    wl.textContent = 'YOU WIN';
}
if (clscore == 5){
    wl.textContent = 'YOU LOSE';
}
})



button2.addEventListener('click', () => {
    if (plscore == 5 || clscore == 5){
        return
    }
    let s = playRound('p')
    if (s == 'W'){
        plscore++
    }
    if (s == 'L'){
        clscore++
    }
    if (s == 'D'){
        d++
    }
pscore.textContent = `Player score: ${plscore}`;
cscore.textContent = `Computer score: ${clscore}`;
ds.textContent = `Draws: ${d}`;
if (plscore == 5){
    wl.textContent = 'YOU WIN';
}
if (clscore == 5){
    wl.textContent = 'YOU LOSE';
}
})



button3.addEventListener('click', () => {
    if (plscore == 5 || clscore == 5){
        return
    }
    let s = playRound('s')
    if (s == 'W'){
        plscore++
    }
    if (s == 'L'){
        clscore++
    }
    if (s == 'D'){
        d++
    }
pscore.textContent = `Player score: ${plscore}`;
cscore.textContent = `Computer score: ${clscore}`;
ds.textContent = `Draws: ${d}`;
if (plscore == 5){
    wl.textContent = 'YOU WIN';
}
if (clscore == 5){
    wl.textContent = 'YOU LOSE';
}
})



button4.addEventListener('click', () => {
    plscore = 0;
    clscore = 0
    d = 0
    pscore.textContent = `Player score: ${plscore}`;
    cscore.textContent = `Computer score: ${clscore}`;
    ds.textContent = `Draws: ${d}`;
    wl.textContent = '';
})