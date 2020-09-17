import React from 'react';
import { Dropdown } from 'semantic-ui-react'

// import css
import './FieldComponent.css';

const FieldComponent = props => {
    const {label, value, withoutBorder, onChange, intialValue, type, dropDownOptions} = props;

    return (
        <div className="field-main-container">
            <div className="field-label">{label}</div>
            {type === 'text' && !withoutBorder && <input className="field-value" type="text" onChange={onChange} value={intialValue}/>}
            {type === 'text' && withoutBorder && <input className="field-value-without-border" type="text" onChange={onChange} value={intialValue}/>}
            {type === 'dropdown' && !withoutBorder && 
            <Dropdown
            fluid
            selection
            options={dropDownOptions}
            className="dropdown-field"
            />
            }
        </div>
    )
}

export default FieldComponent;