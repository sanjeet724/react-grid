import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
    state = {
        selected: false
    }

    handleClick = (e) => {
        let { selected } = this.state;
        this.setState({ selected: !selected });
    }

    render() {
        const { name } = this.props;
        const { selected } = this.state;
        let cssClasses = "cell";
        cssClasses += selected ? " cell-selected" : "";

        return (
            <div className={cssClasses}
                onClick={this.handleClick}>{name}
            </div>
        );
    }
}

export default Cell;