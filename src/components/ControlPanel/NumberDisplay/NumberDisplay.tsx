import React from 'react';
import classes from './NumberDisplay.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";

const NumberDisplay: React.FC = () => {
    const error = useSelector<AppStateType, boolean>(state => state.enumerator.error)
    const displayedValue = useSelector<AppStateType, number>(state => state.enumerator.displayedNumber)
    //isButtonDisabled vs error ???
    return (
        <div className={error ? `${classes.display} ${classes.max}` : classes.display}>{error ? 'Incorrect value!' : displayedValue}</div>
    );
}

export default NumberDisplay;