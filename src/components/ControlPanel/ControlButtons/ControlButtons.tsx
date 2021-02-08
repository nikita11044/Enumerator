import React from 'react';
import classes from './ControlButtons.module.css'
import CustomButton from "../../CustomButton/CustomButton";

type ControlButtons = {
    increment: () => void
    reset: () => void
    incButtonDisabledCondition: boolean
}

const ControlButtons: React.FC<ControlButtons> = ({increment, reset, incButtonDisabledCondition}) => {
    return (
        <div className={`button-wrapper ${classes.buttonWrapper}`}>
            <CustomButton callback={increment} buttonText={'inc'} disabled={incButtonDisabledCondition}/>
            <CustomButton callback={reset} buttonText={'reset'} />
        </div>
    );
}

export default ControlButtons;