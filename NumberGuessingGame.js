let userInput=document.getElementById("userInput");
let gameresult=document.getElementById("gameResult");
let randomnum=Math.ceil(Math.random() * 100);
let attempts=0;
function checkGuess(){
    let input=parseInt(userInput.value);
    attempts=attempts+1;
    if(input>randomnum){
        gameresult.textContent="Too High,try again";
        gameresult.style.backgroundColor="orange"
    }
    else if(input<randomnum){
        gameresult.textContent="Too low,try again";
        gameresult.style.backgroundColor="orange"
    }
    else if(input===randomnum){
        gameresult.textContent="Congratulations, You have guessed the number in " + attempts+" attempts";
        gameresult.style.backgroundColor="green"
    }
    else{
        gameresult.textContent="Enter valid input";
        gameresult.style.backgroundColor="red"
    }
}