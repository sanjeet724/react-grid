import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
    state = {
        selected: false
    }

    handleClick = (e) => {
        console.log("clicked : " + e.target.textContent);
    }

    render() {
        const { name } = this.props;

        return (
            <div className="cell"
                onClick={this.handleClick}>{name}
            </div>
        );
    }
}

export default Cell;