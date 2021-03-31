import React from 'react';
import classes from './CustomButton.module.css'

type CustomButtonPropsType = {
    buttonText: string
    callback: () => void
    disabledCondition: boolean
}

const CustomButton: React.FC<CustomButtonPropsType> = ({buttonText, callback, disabledCondition}) => {
    return (
        <button disabled={disabledCondition} className={disabledCondition ? `${classes.button} ${classes.disabled}` : classes.button} onClick={callback}>{buttonText}</button>
    );
}

export default CustomButton;