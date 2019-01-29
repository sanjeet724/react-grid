import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const InputLabel = ({ id, label, handleChange, placeholder }) => {
    const text = "# of " + label;
    return (
        <div>
            <InputGroup size="sm" className="input-label">
                <InputGroupAddon addonType="prepend">{text}</InputGroupAddon>
                <Input
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e, id)}>
                </Input >
            </InputGroup>
        </div>
    );
}

export default InputLabel;