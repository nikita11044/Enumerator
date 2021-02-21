import React from 'react';
import classes from './ControlButtons.module.css'
import CustomButton from "../../CustomButton/CustomButton";

type ControlButtons = {
    increment: () => void
    reset: () => void
    incButtonDisabledCondition: boolean
    resetButtonDisabledCondition: boolean
}

const ControlButtons: React.FC<ControlButtons> = ({increment, reset, incButtonDisabledCondition, resetButtonDisabledCondition}) => {
    return (
        <div className={`button-wrapper ${classes.buttonWrapper}`}>
            <CustomButton callback={increment} buttonText={'inc'} disabled={incButtonDisabledCondition}/>
            <CustomButton callback={reset} buttonText={'reset'} disabled={resetButtonDisabledCondition}/>
        </div>
    );
}

export default ControlButtons;