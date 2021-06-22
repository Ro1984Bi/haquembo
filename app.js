// @ts-nocheck
let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById('user-score');
const pcScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const results_p = document.querySelector('.results > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function comChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if ( letter === "r") return "Piedra";
    if ( letter === "p") return "Papel";
    return "Tijera";

}

function win(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComWord = "com".fontsize(3).sub()
    const userChoice_div = document.getElementById(userChoice);
    userScore++
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    results_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  gana  ${convertToWord(computerChoice)} ${smallComWord}.Ganaste!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 2000);
}

function lose(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComWord = "com".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    
    pcScore++
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
   
    results_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  pierde  ${convertToWord(computerChoice)} ${smallComWord}.Perdiste.Lo siento!!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 2000);
}

function draw(userChoice,computerChoice) {
  
    const smallUserWord = "user".fontsize(3).sub();
    const smallComWord = "com".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
  
    results_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  empata  ${convertToWord(computerChoice)} ${smallComWord}.Es un empate!!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { userChoice_div.classList.remove('gray-glow')}, 2000);
}


function game(userChoice) {
    const computerChoice = comChoice();
    switch ( userChoice + computerChoice ) {
        case "rs":
            case "pr":
                case "sp":
                    win(userChoice , computerChoice);
                    break;
                    case "rp":
                        case "ps":
                            case "sr":
                                lose(userChoice , computerChoice); 
                                break;
                                case "rr":
                                    case "pp":
                                        case "ss":
                                            draw(userChoice , computerChoice);
                                            break;
                    
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })

    paper_div.addEventListener('click', function() {
        game('p');
    })

    scissors_div.addEventListener('click', function() {
        game('s');
    })
}

main();

