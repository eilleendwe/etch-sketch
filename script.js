//global variable for color
let color = "black";

//domcontentloaded = wait until the html file loaded first
document.addEventListener('DOMContentLoaded', function(){
    let popupBtn = document.getElementById('popup');
    popupBtn.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })

})



function createBoard(size){
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i ++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", colorDiv)
        //kalau mau put div di dalam board
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Size of the board");
    let message = document.getElementById('message');
    if (input == ""){
        message.innerHTML = "Please give a number";
    } else if (input < 0 || input > 100){
        message.innerHTML = "Please give a number from 1-100";
    } else {
        message.innerHTML = "START!";
        return input;
    }
}

let black = document.getElementById('black-btn');
let random = document.getElementById('random-btn');
let reset = document.getElementById('reset-btn');

black.addEventListener("click", function(){
    setColor('black');
});
random.addEventListener("click", function() {
    setColor('random');
});
reset.addEventListener("click", function(){
    resetBoard();
})



function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    } else{
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = 'white');
}