const btn1 = document.querySelector("#btn1");
const selectupper = document.querySelector(".upper");
const below = document.querySelector(".below");
const mess = document.querySelector(".message");

let pscore = 0;
let cscore = 0;

const playerscore = document.querySelector(".plyr-score p");
const computerscore = document.querySelector(".cmptr-score p");

function resetScore(){
    pscore = 0;
    cscore = 0;
}

function checkWinner(){
    if(cscore == 10){
        resetScore();
        mess.textContent = 'Finally Computer Won. Game Reseted!';
        return;
    }
    if(pscore == 10){
        mess.textContent = 'Finally you Won. Game Reseted!';
        resetScore();
        return;
    }
}



btn1.addEventListener("click",()=>{
    
    selectupper.classList.add("fade-out");
    below.classList.add("fade-in");
});

function playMatch(){
  const options = document.querySelectorAll(".options button");
  const computerOptions = ["Rock","Paper","Scissors"];

options.forEach(option => {
    
      option.addEventListener('click',function(){
    
      const computerNumbers = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerNumbers];
      compareHands(this.textContent,computerChoice);
   }); 
    
});
 }

function updateScore(){
    playerscore.textContent = pscore;
    computerscore.textContent = cscore;
    checkWinner();
}

function compareHands(playerChoice,computerChoice){
    
    mess.classList.remove('msg-red');
    mess.classList.remove('msg-yellow');
    console.log(playerChoice, computerChoice);
    
    if(playerChoice === computerChoice){
        mess.textContent = 'It is a tie';
        mess.classList.add('msg-yellow');
        return;
    }
    
    if(playerChoice === "Rock"){
        if(computerChoice === "Scissors"){
             mess.textContent = 'You Win !';
             pscore++;
             updateScore();
             return;
        }else{
             mess.textContent = 'oops! Computer Wins';
             mess.classList.add('msg-red');
             cscore++;
             updateScore();
             return;
        }
        
    }
    
    if(playerChoice === "Paper"){
        
        if(computerChoice === "Scissors"){
             mess.textContent = 'oops! Computer Wins';
             mess.classList.add('msg-red');
             cscore++;
             updateScore();
             return;
        }else{
             mess.textContent = 'You Win !';
             pscore++;
             updateScore();
             return;
        }
        
    }
    if(playerChoice === "Scissors"){
        
         if(computerChoice === "Rock"){
             mess.textContent = 'oops! Computer Wins';
             mess.classList.add('msg-red');
             cscore++;
             updateScore();
             return;
        }else{
             mess.textContent = 'You Win !';
             pscore++;
             updateScore();
             return;
        }
        
    }
    
    
}

playMatch();