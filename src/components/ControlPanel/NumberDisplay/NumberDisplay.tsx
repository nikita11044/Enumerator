import React from 'react';
import classes from './NumberDisplay.module.css'

type NumberDisplayPropsType = {
    displayedValue: string
    incButtonDisabledCondition: boolean
}

const NumberDisplay: React.FC<NumberDisplayPropsType> = ({displayedValue, incButtonDisabledCondition}) => {
    return (
        <div className={incButtonDisabledCondition ? `${classes.display} ${classes.max}` : classes.display}>{displayedValue}</div>
    );
}

export default NumberDisplay;