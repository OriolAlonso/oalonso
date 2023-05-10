let currMoleTile;
let score = 0;
let gameOver = false;

const fondo = new Audio('musica.mp3');
const audio = new Audio('error.mp3');
const hit = new Audio('hitsound.mp3');
const victory = new Audio('victory.mp3');
const bad = new Audio('bad.mp3');

var seconds = 60; //número de segundos a contar

window.onload = function() {
    setshow();
}

function setshow(){
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    
}
function setGame() {
    fondo.play();
    setInterval(music, 10000); // 27000 miliseconds = 27 second, every 27 second call setMole
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole

    function secondPassed() {

        var minutes = Math.round((seconds - 30)/60); //calcula el número de minutos
        var remainingSeconds = seconds % 60; //calcula los segundos
      
        if (remainingSeconds < 10) { 
          remainingSeconds = "0" + remainingSeconds; 
        } 
        document.getElementById('countdown').innerHTML = minutes + ":" +     remainingSeconds; 
        if (seconds == 0) { 
          clearInterval(countdownTimer); 
          selectTile()
          document.getElementById('countdown').innerHTML = "Buzz Buzz"; 
        } else { 
          seconds--; 
        } 
      } 
      var countdownTimer = setInterval(secondPassed, 1000);
}
function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function music(){
    if(gameOver==false){
        fondo.play();
    }
}

function setMole() {
    
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./mole.png";

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function stop(){
    bad.pause();
    fondo.pause();
}
function selectTile() {

       
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        hit.play();
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html

        if(score==150){
            const victoryMessage = document.getElementById('victory-message');
            if (score >= 0) {
            victoryMessage.removeAttribute('hidden');
            }
            victory.play();

            startButton.disabled = true;
            startButton.style.display = 'none';
            setInterval(stop, 15000); // 1000 miliseconds = 1 second, every 1 second call setMole
            gameOver = true;  
        }
    }
    else {
        score += -10;
        document.getElementById("score").innerText = score.toString(); //update score html
        
        
        audio.play();

        if (score == -10 || seconds == 0 ){
        bad.play();
        const LostMessage = document.getElementById('lost-message');
        const startButton = document.getElementById('Start');
        
        audio.pause();
        fondo.pause();
        
        LostMessage.removeAttribute('hidden');
        startButton.disabled = true;
        startButton.style.display = 'none';
        setInterval(stop, 15556); // 1000 miliseconds = 1 second, every 1 second call setMole

        gameOver = true;   
        } 
    }
}

