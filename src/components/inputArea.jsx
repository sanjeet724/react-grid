import React, { Component } from 'react';
import InputLabel from './inputLabel';
import { Button, Alert } from 'reactstrap';
import Joi from "joi-browser";

class InputArea extends Component {
    // initial state
    state = {
        rows: 0,
        cols: 0,
        validationError: null
    }

    // validation
    schema = {
        value: Joi.number().integer().min(1).max(100)
    }

    // initialize the rows and cols
    componentWillMount = () => {
        const { initialRows, initialCols } = this.props;
        this.setState({ rows: initialRows, cols: initialCols });
    }

    validateInput = (value) => {
        const { error } = Joi.validate(value, this.schema.value);
        if (!error) {
            return null;
        }

        const validationErrors = error.details[0].message;
        return validationErrors;
    }

    // allow values upto 100
    handleChange = (e, id) => {
        const value = e.target.value;
        // check for validation errors
        const error = this.validateInput(e.target.value);
        if (error) {
            this.setState({ validationError: error });
            return;
        }

        // no errors, update the state
        this.setState({ validationError: null });

        if (id === "row") {
            this.setState({ rows: value });
        } else {
            this.setState({ cols: value });
        }
    }

    render() {
        const { initialRows, initialCols, handleEnter } = this.props
        const { rows, cols, validationError } = this.state;
        const hasErrors = validationError !== null;
        const disabled = hasErrors === true;
        return (
            <div className="input-area-container">
                <div className="input-area">
                    <InputLabel
                        id={"row"}
                        label={"Rows"}
                        value={rows}
                        placeholder={initialRows}
                        handleChange={this.handleChange}
                    />
                    <InputLabel
                        id={"col"}
                        label={"Cols"}
                        value={cols}
                        placeholder={initialCols}
                        handleChange={this.handleChange}
                    />
                    <Button
                        color="primary"
                        disabled={disabled}
                        size="sm"
                        onClick={(e) => handleEnter(rows, cols)}>
                        Enter</Button>
                </div>
                <div className="validation-alert">
                    {hasErrors &&
                        <Alert color="danger" size="sm">Invalid value : {validationError}</Alert>
                    }
                </div>
            </div>
        );
    }
}

export default InputArea;