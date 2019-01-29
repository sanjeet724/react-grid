import React from 'react';
import Cell from './cell';
import '../App.css';


function createCells(rows, cols) {
    let cellData = [];
    for (let i = 0; i < rows; i++) {
        cellData.push(<div key={i} className="row-container"></div>)
        for (let j = 0; j < cols; j++) {
            cellData.push(
                <Cell
                    key={i + "," + j}
                    name={i + "," + j}
                />);
        }
    }

    return cellData;
}

const Grid = ({ totalRows, totalCols }) => {
    return (
        <div className="grid-container">
            {
                createCells(totalRows, totalCols)
            }
        </div>
    );
}

export default Grid;