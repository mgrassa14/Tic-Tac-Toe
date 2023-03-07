  /*----- constants -----*/
//   add all possible 3 in a row outcomes to get winner
const board = [
    {A1:0, B1:0, C1:0},
    {A2:0, B2:0, C2:0},
    {A3:0, B3:0, C3:0},
    {A1:0, A2:0, A3:0},
    {B1:0, B2:0, B3:0},
    {C1:0, C2:0, C3:0},
    {A1:0, B2:0, C3:0},
    {C1:0, B2:0, A3:0}
]
// X's = 1
// O's = -1
// X will always start first
let XO = 1
  /*----- state variables -----*/
let player = document.querySelector('.players-turn');

  /*----- cached elements  -----*/



  /*----- event listeners -----*/
const buttonA1 = document.querySelector('.A1')
buttonA1.addEventListener('click', gamePlay);


  /*----- functions -----*/
// change the XO variable
// change the display of who's turn
// add the image X or O
function gamePlay(){
    board[0].A1 = 1
    if (XO === 1){
        XO = -1
        player.textContent = "O's Turn"
    } else {
        XO = 1
        player.textContent = "X's Turn"
    }
    console.log(board)
    console.log(XO)
}