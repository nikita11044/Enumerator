import React from 'react';
import classes from './NumberDisplay.module.css'

type NumberDisplayPropsType = {
    displayedValue: string
    error: boolean
    incButtonDisabledCondition: boolean
}

const NumberDisplay: React.FC<NumberDisplayPropsType> = ({displayedValue, incButtonDisabledCondition, error}) => {
    return (
        <div className={incButtonDisabledCondition ? `${classes.display} ${classes.max}` : classes.display}>{error ? 'Incorrect value!' : displayedValue}</div>
    );
}

export default NumberDisplay;