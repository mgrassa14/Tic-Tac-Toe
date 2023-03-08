
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
let xPieces = 5
let oPieces = 4
let moves = 0

let player = document.querySelector('.players-turn');
let buttons = document.querySelectorAll('.box');
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function(){
    moves += 1
    if (XO === 1){
      XO = -1
      player.textContent = "O's Turn"
      buttons[i].innerHTML = '<img src="https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png"/>'
    } else {
      XO = 1
      player.textContent = "X's Turn"
      buttons[i].innerHTML = '<img src="https://i.imgur.com/mrTYNoE.png"/>'
    } 
  },{once : true});
}

let resetEl = document.querySelector('.reset')
resetEl.addEventListener('click', function(){
  XO = 1
  xPieces = 5
  oPieces = 4
  moves = 0
  buttons.forEach(element => element.innerHTML = '')
  player.textContent = "X's Turn"
})
// buttonA1.addEventListener('click', gamePlay);


  /*----- functions -----*/
// change the XO variable
// change the display of who's turn
// add the image X or O
// function gamePlay(){
//     if (XO === 1){
//         XO = -1
//         player.textContent = "O's Turn"
//         // buttons[i].img.src = "https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png";
//         // buttons[i].innerHTML = '<img src="https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png" />'
//     } else {
//         XO = 1
//         player.textContent = "X's Turn"
//         // buttons[i].innerHTML = '<img src="https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png" />'
//         // img.src = "https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png";
//         // buttons[i].innerHTML = 'testing'

//         //  = "https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png";
//     }
//     // console.log(board)
//     console.log(XO, '<<')
// }
// console.log(XO,'<')
// function addPiece()