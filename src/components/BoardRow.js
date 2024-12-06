import React from "react";
import Square from "./Square";

const BoardRow = (props) => {
    const renderSquare = (col) => {
        return (
            <Square row={props.row} col={col}/>
        );
    };
    return (
        <div className="board-row">
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
        </div>
    );
}

export default BoardRow;