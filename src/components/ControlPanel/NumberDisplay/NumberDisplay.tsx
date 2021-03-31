import React from 'react';
import classes from './NumberDisplay.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";

const NumberDisplay: React.FC = () => {
    const error = useSelector<AppStateType, boolean>(state => state.enumerator.error)
    const displayedValue = useSelector<AppStateType, string>(state => state.enumerator.displayedValue)
    return (
        <div className={error ? `${classes.display} ${classes.max}` : classes.display}>{error ? 'Incorrect value!' : displayedValue}</div>
    );
}

export default NumberDisplay;