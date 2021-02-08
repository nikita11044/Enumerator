import React from 'react';
import classes from './CustomButton.module.css'

type CustomButtonPropsType = {
    callback: () => void
    buttonText: string
    disabled?: boolean
}

const CustomButton: React.FC<CustomButtonPropsType> = ({callback,buttonText, disabled}) => {
    return (
        <button disabled={disabled} className={disabled ? `${classes.button} ${classes.disabled}` : classes.button} onClick={callback}>{buttonText}</button>
    );
}

export default CustomButton;