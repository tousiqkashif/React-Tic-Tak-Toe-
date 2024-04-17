import { useState } from "react";
import Player from "./Player";




 const Gameboard = ({onSelectSquare , board }) => {

 
// const [gameBoard , setGameBoard] = useState(intialGameBoard);

// function handleSelectSquare(rowIndex , colIndex){
//   setGameBoard((PreGameBoard)=>{
//    const updatedBoard = [...PreGameBoard.map(innerArry => [...innerArry])];
//    updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//     return updatedBoard;
//   });

//   onSelectSquare();
// }
  return (
    <>
    <ol>
    {board.map((row,rowIndex)=> <li key={rowIndex}>

        <ol>{
            row.map((Symbol,colIndex)=> <li key={colIndex}><button id="sym-btn" onClick={() => onSelectSquare(rowIndex , colIndex)} disabled={Symbol !== null}>{Symbol}</button></li>)
            }

        </ol>
    </li>
)}
    </ol>
    </>
  )
}

export default Gameboard
