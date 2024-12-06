import React, { useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";

import '../index.css';
import Square from "./Square";


const Board = () => {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(false);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ];

        for (let line of lines) {
            const [a, b, c] = line;

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }

        return null;
    };


    const handleClickEvent = (i) => {
        const newSquares = [...squares];

        const winnerDeclared = Boolean(calculateWinner(newSquares));
        const squareFilled = Boolean(newSquares[i]);

        if (winnerDeclared || squareFilled) {
            return;
        }

        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const handleRestartEvent = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(false);
    };

    const renderSquare = (i) => {
        return (
            <Square 
                value={squares[i]} 
                handleClickEvent={() => handleClickEvent(i)}

            />
        );
    };

    

    const winner = calculateWinner(squares);
    const status = winner ?
        `Winner : ${winner}` :
        `Next player : ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="board">
            <div className="header">
                <div className="status">{status}</div>
                <div className="restart">
                    <VscDebugRestart 
                        onClick={() => handleRestartEvent()}            
                    />
                </div>
            </div>
            <div className="board-row">
                {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;