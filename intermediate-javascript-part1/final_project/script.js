window.onload = function (){

  let turn = 0;
  let pSel= []; //player Selection
  let player = function (){return turn % 2 === 0 ? "X" : "O"};
  let showPlayer = document.getElementById("showPlayer")

  //player selection - addEventListener
    //record player selection in playerSelection array
    //mark player selection on webpage
    //show next player on webpage
  for(let i = 0; i < 9; i++){
    let selections = document.getElementById(i);

    selections.addEventListener("click", function (){
      if(pSel[i] === undefined){
        selections.innerText = player();
        pSel[i] = player();
        checkWinner() //hmmm alert displays before updating innerText.
      }
    })
  }
  //check if won
    //min 5 turns to win.
      // winning combinations 012, 036, 048, 147, 246, 258, 345, 678
  function checkWinner(){
    let check = player().repeat(3)
    let currentPlayer = player();
  
    if(turn >= 5-1){
      if(
          pSel[0]+pSel[1]+pSel[2] === check ||
          pSel[0]+pSel[3]+pSel[6] === check ||
          pSel[0]+pSel[4]+pSel[8] === check ||
          pSel[1]+pSel[4]+pSel[7] === check ||
          pSel[2]+pSel[4]+pSel[6] === check ||
          pSel[3]+pSel[4]+pSel[5] === check ||
          pSel[2]+pSel[5]+pSel[8] === check ||
          pSel[6]+pSel[7]+pSel[8] === check 
          ) {
         turn = 9
         return alert("Player " + currentPlayer + " Wins!" )
      } else if (turn === 8){
        return alert("Tie")
      }
    }
      turn++;
      showPlayer.innerHTML = player();
  }
      

   

}




