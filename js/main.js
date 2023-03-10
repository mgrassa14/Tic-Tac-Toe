// board = {box1 box2 box3 box4 box5 box6 box7 box8 box9}
let board = {A1:0, B1:0, C1:0, A2:0, B2:0, C2:0,A3:0, B3:0, C3:0};
// variable to determine who goes first with the values 1 and -1
let XO = 1;
// variable for the number of X pieces
let xPieces = 5;
// variable for the number of O pieces
let oPieces = 4;
// total number of moves/clicks
let moves = 0;

// variable = html for who's turn it is
let player = document.querySelector('.players-turn');
// variable = html for the number of x pieces left
const xPiecesLeft = document.querySelector('.piecesX');
// variable = html for the number of O pieces
const oPiecesLeft = document.querySelector('.piecesO');
// variable = html for all of my buttons with a class of "box"
const buttons = document.querySelectorAll('.box');
// variable = html for the class of "board"
const boardEl = document.querySelector('.board')

// click event listener to boardEl for all of my buttons to call function gameplay
boardEl.addEventListener('click', gamePlay)
// create funciton gameplay to start the game with a parameter "e" that represents every click the user does
function gamePlay(e){
  // declare variable = button clicked html
  const button = e.target;
  // if the css cerser = "not-allowed", do not continue through the function 
  if (window.getComputedStyle(button).cursor === 'not-allowed'){
    return
  };
  // if the text content for ".players-turn" = "X Wins!" or "O wins!", do not continue through the function
  if (player.textContent === "X Wins!" || player.textContent === "O Wins!"){
    return
  };
  // declare variable = the first class within the html element that the user clicks
  let key = e.target.className.split(' ')[0];
  // increase number of moves by 1
  moves += 1;
  // if the starting value of XO = 1, follow instructions
  if (XO === 1){
    // change value of XO = -1
    XO = -1;
    // decrease number of x pices by 1
    xPieces -= 1;
    // change the the text content of x pieces left to the degreaced value of xPieces 
    xPiecesLeft.textContent = `${xPieces} Pieces Left`;
    // change display to "O's Turn"
    player.textContent = "O's Turn";
    // add X image 
    e.target.innerHTML = '<img src="https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png"/>';
    // after clicking it once, user can no longer click on button
    e.target.style.cursor = 'not-allowed';
  // if the starting value of XO != 1, follow instructions 
  } else {
    // change value of XO = 1
    XO = 1;
    // decrease number of O pices by 1
    oPieces -= 1;
    // change the text content of O pieces left to the decreased value of oPieces
    oPiecesLeft.textContent = `${oPieces} Pieces Left`;
    // change display to "X's Turn"
    player.textContent = "X's Turn";
    // add O image
    e.target.innerHTML = '<img src="https://i.imgur.com/mrTYNoE.png"/>';
    // after clicking it once, user can no longer click on button
    e.target.style.cursor = 'not-allowed';
  };
  // add the changed value of XO after click to board object key that has the same class name
  board[key] = XO;
  // call getWinner function
  getWinner();
}

// create getWinner function to determine the winner of the game and change the background colors
function getWinner(){
  // if any of the winning possibilities sum = -3, follow instructions
  if ((board.A1 + board.A2 + board.A3) === -3 || (board.B1 + board.B2 + board.B3) === -3 || (board.C1 + board.C2 + board.C3) === -3 || (board.A1 + board.B1 + board.C1) === -3 || (board.A2 + board.B2 + board.C2) === -3 || (board.A3 + board.B3 + board.C3) === -3 || (board.A1 + board.B2 + board.C3) === -3 || (board.C1 + board.B2 + board.A3) === -3){
    // for each element within buttons(which has a list of all of my html buttons) change to the color red
    buttons.forEach(element => {
      element.style.backgroundColor = 'red';
    });
    // change the text content of ".players-turn" class "X Wins!"
    player.textContent = "X Wins!";
    // remove the event listener for the board, which also removes the event listener click from the buttons
    boardEl.removeEventListener('click', function gamePlay(){});
  // if any of the winning possibilities sum = 3, follow instructions  
  } else if ((board.A1 + board.A2 + board.A3) === 3 || (board.B1 + board.B2 + board.B3) === 3 || (board.C1 + board.C2 + board.C3) === 3 || (board.A1 + board.B1 + board.C1) === 3 || (board.A2 + board.B2 + board.C2) === 3 || (board.A3 + board.B3 + board.C3) === 3 || (board.A1 + board.B2 + board.C3) === 3 || (board.C1 + board.B2 + board.A3) === 3){
    // for each element within buttons(which has a list of all of my html buttons) change to the color blue
    buttons.forEach(element => {
      element.style.backgroundColor = 'blue';
    });
    // change the text content of ".players-turn" class "O Wins!"
    player.textContent = "O Wins!";
    // remove the event listener for the board, which also removes the event listener click from the buttons
    boardEl.removeEventListener('click', function gamePlay(){});
  // if the total moves = 9 and any of the winning posibilites sum is less than 3, follow isntructions 
  } else if (moves === 9 && ((board.A1 + board.A2 + board.A3) < 3 || (board.B1 + board.B2 + board.B3) < 3 || (board.C1 + board.C2 + board.C3) < 3 || (board.A1 + board.B1 + board.C1) < 3 || (board.A2 + board.B2 + board.C2) < 3 || (board.A3 + board.B3 + board.C3) < 3 || (board.A1 + board.B2 + board.C3) < 3 || (board.C1 + board.B2 + board.A3) < 3)){
    // for each element within buttons(which has a list of all of my html buttons) change to the color purple
    buttons.forEach(element => {
      element.style.backgroundColor = 'purple';
    });
    // change the text content of ".players-turn" class "Cat's Game!"
    player.textContent = "Cats Game!";
  };
};

// set variable = html with classname "reset"
let resetEl = document.querySelector('.reset');
// add click event listener to my reset button with a function when clicked
resetEl.addEventListener('click', function(){
  // change XO back to starting value
  XO = 1;
  // change xPiece to the starting value
  xPieces = 5;
  // change oPieces to the starting value
  oPieces = 4;
  // reset the value of total moves 
  moves = 0;
  // for each element within buttons(which is a list of all of my buttons), replace the inner html with nothing
  buttons.forEach(element => element.innerHTML = '');
  // change .player-turn back to original text content
  player.textContent = "X's Turn";
  // change the xPiecesLeft and oPiecesLeft text content to starting string
  xPiecesLeft.textContent = '5 Pieces Left';
  oPiecesLeft.textContent = '4 Pieces Left';
  // set values of board object back to 0's
  board = {A1:0, B1:0, C1:0, A2:0, B2:0, C2:0,A3:0, B3:0, C3:0};
  // remove the cursor css 'not-allowed' to allow the user to click the buttons again
  buttons.forEach(element => element.style.cursor = '' );
  // for each element within buttons(which is a list of all of my buttons), reset the background color to no color
  buttons.forEach(element => {
    element.style.backgroundColor = '';
  });
  // call function gameplay to continue the cycle of playing the tic-tac-toe game
  gamePlay();
})
