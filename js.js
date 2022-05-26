//Function for computer to choose rock paper or scissors
function computerPlay(){
    let arr = ['r','p','s']
    let num = Math.floor(Math.random()*3)
    return  arr[num]
}

//Function to play one round of RPS
function playRound(playerPlay){
    let comp = computerPlay()

    //returns draw if both players make the same selection
    if (comp === playerPlay){
        return 'D'
    }
    //returns winning hands of RPS
    if (comp == 's' && playerPlay == 'r' || comp == 'r' && playerPlay == 'p' || comp == 'p' && playerPlay=='s'){
        return 'W'
    }
    //returns losing hands of RPS
    if (comp == 's' && playerPlay == 'p' || comp == 'r' && playerPlay == 's' || comp == 'p' && playerPlay=='r'){
        return 'L'
    }
}

//creating all of our necessary buttons and queries to play the game
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


//Begins a round of RPS with the player choice of rock when clicked
button1.addEventListener('click', () => {
    //if a winner has already been decided do not run another round
    if (plscore == 5 || clscore == 5){
        return
    }
    //Play a round and return the result of the game to the variable s
    let s = playRound('r')

    //update scores based on results of the game probably could do this in the function tbh and have less code but oh well
    if (s == 'W'){
        plscore++
    }
    if (s == 'L'){
        clscore++
    }
    if (s == 'D'){
        d++
    }

    //update game state to show results of the game
pscore.textContent = `Player score: ${plscore}`;
cscore.textContent = `Computer score: ${clscore}`;
ds.textContent = `Draws: ${d}`;

//if a player reaches 5 wins announce the winner to the user
if (plscore == 5){
    wl.textContent = 'YOU WIN';
}
if (clscore == 5){
    wl.textContent = 'YOU LOSE';
}
})


//Begins a round of RPS with the player choice of paper when clicked
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


//Begins a round of RPS with the player choice of scissors when clicked
button3.addEventListener('click', () => {
    if (plscore == 5 || clscore == 5){
        return
    }
    let s = playRound('s')
    if (s == 'W'){
        plscore++
    }
    else if (s == 'L'){
        clscore++
    }
    else {
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


//Resets the game state
button4.addEventListener('click', () => {
    plscore = 0;
    clscore = 0
    d = 0
    pscore.textContent = `Player score: ${plscore}`;
    cscore.textContent = `Computer score: ${clscore}`;
    ds.textContent = `Draws: ${d}`;
    wl.textContent = '';
})