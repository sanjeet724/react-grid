import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
    state = {
        selected: false
    }

    componentDidMount = () => {
        const { reset } = this.props;
        const { selected } = this.state;
        console.log(`In component did mount, selected : ${selected}`);
        // should it be reset ?
        if (selected && reset) {
            this.setState({ selected: false });

        }
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