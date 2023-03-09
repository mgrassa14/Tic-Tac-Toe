console.log("JS TEST MAIN BRANCH!")
// const getWinner = [
//     {A1:0, B1:0, C1:0},
//     {A2:0, B2:0, C2:0},
//     {A3:0, B3:0, C3:0},
//     {A1:0, A2:0, A3:0},
//     {B1:0, B2:0, B3:0},
//     {C1:0, C2:0, C3:0},
//     {A1:0, B2:0, C3:0},
//     {C1:0, B2:0, A3:0}
// ]

let board = {A1:0, B1:0, C1:0, A2:0, B2:0, C2:0,A3:0, B3:0, C3:0}






// let keys = Object.forEach.keys(getWinner).
// console.log(keys)
// X's = -1
// O's = 1
// X will always start first
let XO = 1
let xPieces = 5
let oPieces = 4
let moves = 0

let player = document.querySelector('.players-turn');
let buttons = document.querySelectorAll('.box');
const boardEl = document.querySelector('.board')

// let classes = document.getElementsById('box').classList.items(0);
// console.log(buttons[0].attr('class').split(' ').length);
// console.log(classes)

// const boardEl = document.querySelector('.board')

boardEl.addEventListener('click', gamePlay)
function gamePlay(e){
  const button = e.target
  if (window.getComputedStyle(button).cursor === 'not-allowed'){
    console.log('returning')
    return 
  }
  let key = e.target.className.split(' ')[0]
  // e.target isd the element that the user is click on
  // console.log(e.target.className.split(' ')[0])
  console.log(window.getComputedStyle(button).cursor, 'check what this is')
  moves += 1
      // console.log(moves,'<< moves update')
  if (XO === 1){
    XO = -1
    xPieces -= 1
    player.textContent = "O's Turn"
    e.target.innerHTML = '<img src="https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png"/>'
    e.target.style.cursor = 'not-allowed';
  } else {
    XO = 1
    oPieces -= 1
    player.textContent = "X's Turn"
    e.target.innerHTML = '<img src="https://i.imgur.com/mrTYNoE.png"/>'
    e.target.style.cursor = 'not-allowed';
  } 
  // console.log(XO,'<< XO')
  board[key] = XO
  // console.log(board, '<<')
  // console.log(xPieces, 'Pieces left X')
  // console.log(oPieces, 'Pieces left O')
  // console.log(e.target,'blob')
  // e.target.removeEventListener('click', gamePlay)

  getWinner()
}





function getWinner(){
  console.log(moves,'<<moves')
  // console.log(board, '>>>')
  // console.log(board.A1)
  if ((board.A1 + board.A2 + board.A3) === -3 || (board.B1 + board.B2 + board.B3) === -3 || (board.C1 + board.C2 + board.C3) === -3 || (board.A1 + board.B1 + board.C1) === -3 || (board.A2 + board.B2 + board.C2) === -3 || (board.A3 + board.B3 + board.C3) === -3 || (board.A1 + board.B2 + board.C3) === -3 || (board.C1 + board.B2 + board.A3) === -3){
    player.textContent = "X Wins!"
    boardEl.removeEventListener('click', function gamePlay(){})
    // document.getElementsByClassName('A1').style
  } else if ((board.A1 + board.A2 + board.A3) === 3 || (board.B1 + board.B2 + board.B3) === 3 || (board.C1 + board.C2 + board.C3) === 3 || (board.A1 + board.B1 + board.C1) === 3 || (board.A2 + board.B2 + board.C2) === 3 || (board.A3 + board.B3 + board.C3) === 3 || (board.A1 + board.B2 + board.C3) === 3 || (board.C1 + board.B2 + board.A3) === 3){
    player.textContent = "O Wins!"
    boardEl.removeEventListener('click', function gamePlay(){})
  } else if (moves === 9 && ((board.A1 + board.A2 + board.A3) < 3 || (board.B1 + board.B2 + board.B3) < 3 || (board.C1 + board.C2 + board.C3) < 3 || (board.A1 + board.B1 + board.C1) < 3 || (board.A2 + board.B2 + board.C2) < 3 || (board.A3 + board.B3 + board.C3) < 3 || (board.A1 + board.B2 + board.C3) < 3 || (board.C1 + board.B2 + board.A3) < 3)){
    player.textContent = "Cats Game!"
  }
  // boardEl.removeEventListener('click', function(){})
}

// function gamePlay(){
//   for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', function(){
//       moves += 1
//       // console.log(moves,'<< moves update')
//       if (XO === 1){
//         boardEl.addEventListener('click', function(e){
//           // if (e.target.className.split(' ')[0] === )
//           let key = e.target.className.split(' ')[0]
//           board[key] = 1
//           console.log(board)
//           XO = -1
//           player.textContent = "O's Turn"
//           buttons[i].innerHTML = '<img src="https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png"/>'
//         })
//       } else {
//         boardEl.addEventListener('click', function(e){
//           let key = e.target.className.split(' ')[0]
//           board[key] = -1
//           XO = 1
//           player.textContent = "X's Turn"
//           buttons[i].innerHTML = '<img src="https://i.imgur.com/mrTYNoE.png"/>'
//         })
//       } 
//       console.log(XO,'<< XO')
//     },{once : true});
//   }
// }

// gamePlay()

let resetEl = document.querySelector('.reset')
resetEl.addEventListener('click', function(e){
  XO = 1
  xPieces = 5
  oPieces = 4
  moves = 0
  buttons.forEach(element => element.innerHTML = '')
  player.textContent = "X's Turn"
  board = {A1:0, B1:0, C1:0, A2:0, B2:0, C2:0,A3:0, B3:0, C3:0}
  buttons.forEach(element => element.style.cursor = '' );
  // console.log(board)
  // remove event listeners
  // for(let i = 0; i < buttons.length; i++){
  //   buttons[i].removeEventListener('click', function(){})
  // }
  // boardEl.removeEventListener('click', function(){})
  // gameplay function 
  gamePlay()
})