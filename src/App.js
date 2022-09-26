import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  const [currentPlayer, setCurrentPlayer] = useState("❌")

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...squares]
console.log(clickedSquare)
  if (squares[clickedSquare] === null) {
    //updateBoard[clickedSquare] = "❌"
    //setSquares(updateBoard)
    setCurrentPlayer(currentPlayer)
  }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board-game">
        {squares.map((squares, index) => {
          return (
            <Square 
              squares={squares}
              index={index} 
              key={index}
              handleGamePlay={handleGamePlay} />

          )
        })}

      </div>
      
    </>
  )
}

export default App