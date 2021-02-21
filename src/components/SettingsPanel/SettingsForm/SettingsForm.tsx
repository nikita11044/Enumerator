import React, {ChangeEvent} from 'react';
import classes from './SettingsForm.module.css'

type SettingsFormPropsType = {
    updateValue: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: string
    minValue: string
    error: boolean
}

const SettingsForm: React.FC<SettingsFormPropsType> = ({updateValue, maxValue, minValue, error}) => {

    return (
        <div>
            <form className={classes.display}>
                <label>max value: <input className={error ? classes.error : ''} id='maxNumber' type='number' value={maxValue}
                onChange={updateValue}/></label>
                <label>min value: <input className={error ? classes.error : ''} id='minNumber' type='number' value={minValue}
                onChange={updateValue}/></label>
            </form>
        </div>
    );
}

export default SettingsForm;