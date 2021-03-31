import React from 'react';
import classes from './ControlButtons.module.css'
import CustomButton from "../../CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../redux/enumerator-reducer";
import {AppStateType} from "../../../redux/store";

const ControlButtons: React.FC = () => {
    const dispatch = useDispatch()
    const increment = () => {dispatch(actions.incValue())}
    const reset = () => {dispatch(actions.resetValues())}
    const incButtonDisabledCondition = useSelector<AppStateType, boolean>(state => state.enumerator.incButtonDisabledCondition)
    const resetButtonDisabledCondition = useSelector<AppStateType, boolean>(state => state.enumerator.resetButtonDisabledCondition)
    return (
        <div className={`button-wrapper ${classes.buttonWrapper}`}>
            <CustomButton disabledCondition={incButtonDisabledCondition} buttonText={'inc'} callback={increment}/>
            <CustomButton disabledCondition={resetButtonDisabledCondition} buttonText={'reset'} callback={reset}/>
        </div>
    );
}

export default ControlButtons;