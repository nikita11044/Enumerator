import React from 'react';
import classes from './SettingsForm.module.css'

const SettingsForm = () => {
    return (
        <div>
            <form className={classes.display}>
                <label>max value: <input type='number' value="0"
                /></label>
                <label>min value: <input type='number' value="0"
                /></label>
            </form>
        </div>
    );
}

export default SettingsForm;