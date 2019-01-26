import React from 'react';
import Cell from './cell';
import '../App.css';

const Grid = ({ rows, cols }) => {
    const r = [...Array(rows).keys()];
    const c = [...Array(cols).keys()];
    return (
        <div className="grid-container">
            {
                r.map((row, i) => (
                    c.map((col, j) => (
                        <Cell
                            key={i + "," + j}
                            name={i + "," + j}
                        />
                    ))
                ))
            }
        </div>
    );
}

export default Grid;