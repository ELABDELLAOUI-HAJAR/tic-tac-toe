import React from "react";
import Board from "./Board";

import '../index.css';
  
const Game = () => {
    return (
      <div className="game">
        Tic-Tac-Toe
        <Board />
      </div>
    );
  }

export default Game;