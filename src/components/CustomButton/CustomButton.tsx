import React from 'react';
import classes from './CustomButton.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

type CustomButtonPropsType = {
    buttonText: string
}

const CustomButton: React.FC<CustomButtonPropsType> = ({buttonText}) => {
    const error = useSelector<AppStateType, boolean>(state => state.enumerator.error)

    return (
        <button disabled={error} className={error ? `${classes.button} ${classes.disabled}` : classes.button}>{buttonText}</button>
    );
}

export default CustomButton;