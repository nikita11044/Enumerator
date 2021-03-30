import React, {ChangeEvent} from 'react';
import classes from './SettingsForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {actions} from "../../../redux/enumerator-reducer";

const SettingsForm: React.FC = () => {

    const maxValue = useSelector<AppStateType, number>(state => state.enumerator.maxNumber)
    const minValue = useSelector<AppStateType, number>(state => state.enumerator.minNumber)
    const error = useSelector<AppStateType, boolean>(state => state.enumerator.error)
    const dispatch = useDispatch()
    const updateValueOnClick = (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.updateValue(e.currentTarget.id, e.currentTarget.value))

    return (
        <div>
            <form className={classes.display}>
                <label>max value: <input className={error ? classes.error : ''} id='maxNumber' type='number' value={maxValue}
                onChange={updateValueOnClick}/></label>
                <label>min value: <input className={error ? classes.error : ''} id='minNumber' type='number' value={minValue}
                onChange={updateValueOnClick}/></label>
            </form>
        </div>
    );
}

export default SettingsForm;