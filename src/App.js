import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  const [currentPlayer, setCurrentPlayer] = useState("❌")

  const handleGamePlay = (clickedSquare) => {
  console.log(clickedSquare)
  
  if (squares[clickedSquare] === null) {
    //const updateSquare = [...squares]
    squares[clickedSquare] = currentPlayer
    setSquares(squares)
    setCurrentPlayer (currentPlayer==="❌" ? "⭕️" : "❌")
    //setCurrentPlayer(currentPlayer)
  }
  }
  
  let winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i=0; i < winner.length; i++) {
      const [a, b, c] = winner[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
         alert("You Win!")
        //  let status
        //  if (winner) {
        //   status = `Winner: ${winner}`;
        //  } else {
        //   status = 'Next player: ' + ("❌" ? "⭕️" : "❌")
        //  }
      }  
    }

   const handleReset = () => {
    setSquares(Array(9).fill(null))
   }
    return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board-game">
        {squares.map((square, index) => {
          return (
            <Square 
              square={square}
              index={index} 
              key={index}
              handleGamePlay={handleGamePlay} />

          )
        })}

      </div>
      {/* //<div className="status">{status}</div> */}
      <div className="button-section">
        <button className="reset-button" onClick={handleReset}>Restart Game</button>
      </div>
      
    </>
  )
}

export default App