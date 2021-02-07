import React, {ChangeEvent} from 'react';
import classes from './SettingsForm.module.css'

type SettingsFormPropsType = {
    updateValue: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: string
    minValue: string
}

const SettingsForm: React.FC<SettingsFormPropsType> = ({updateValue, maxValue, minValue}) => {

    return (
        <div>
            <form className={classes.display}>
                <label>max value: <input id='maxNumber' type='number' value={maxValue}
                onChange={updateValue}/></label>
                <label>min value: <input id='minNumber' type='number' value={minValue}
                onChange={updateValue}/></label>
            </form>
        </div>
    );
}

export default SettingsForm;