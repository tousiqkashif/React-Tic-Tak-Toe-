export default function Gameover({winner , reStart}){
return(
    <div id="gameover">
        <div className="row">
        <h2>Game Over!</h2>
       {winner && <p>{winner} Won!</p>}
       {!winner && <p>It's a draw!</p>}
       
        <button onClick={reStart}>Rematch!</button>
        </div>
    </div>

);
}