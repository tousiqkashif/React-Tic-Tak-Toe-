import './App.css';
import Player from './Player.jsx'
import Gameboard from './Gameboard.jsx';
import { useState } from 'react';
import Log from './Log.jsx';
import Gameover from './Gameover.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import { within } from '@testing-library/react';

const intialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
   
  }
  return currentPlayer;
}

function App() {
  const [players , setPlayers ] =  useState({ 'X': 'Player1' , 'O' : 'Player2'})
  const [gameTurns , setGameTurns ] = useState([]);


 const activePlayer = deriveActivePlayer(gameTurns);

 let gameBoard = [...intialGameBoard.map(array => [...array])];

 for (const turn of gameTurns){
   const {square , player} = turn;
   const {row , col} = square;

   gameBoard[row][col] = player;
 }

 let winner;
for (const combination of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

  if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
  {
    
    winner = players[firstSquareSymbol].props.value;
    
    // winner.toString()
    
    // console.log(winner);
  }
  
}

const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex , colIndex){

 
 setGameTurns(prevTurn => {
const currentPlayer = deriveActivePlayer(prevTurn);

  const updatedTurns = [ { square : {row : rowIndex , col: colIndex}, player: currentPlayer}, ...prevTurn];

 

  return updatedTurns;
 });
 }

 function handleRestart(){
  
  setGameTurns([]);
  
}

function handlePlayerNameChange(symbol , newName){
  setPlayers(prevPlayers => {
    return {
      ...prevPlayers,
      [symbol]: newName
    }
  });

}
  return (
    <>
      <main>
        <div id="Game-compoent">
          <ol id='players' className='player'>

            <Player iniName="Player1" Symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>

            <Player iniName="Player2" Symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>

          </ol>
          <br></br>
          <br></br>
          
          {(winner || hasDraw) && <Gameover winner={winner} reStart={handleRestart}/>}
          <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        {/* <Log turns={gameTurns}/> */}
      </main>
    </>
  );
}

export default App;
