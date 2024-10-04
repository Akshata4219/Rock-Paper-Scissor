let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];
};

const drawGame=()=>{
    console.log("draw Game");
    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor="blue";
}

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lost");
        msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice=",compChoice);

    if(userChoice ===compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choices was clicked");
        playGame(userChoice);
    });
});