import React from 'react';
import classes from './ControlButtons.module.css'

const ControlButtons = () => {
    return (
        <div className={`button-wrapper ${classes.buttonWrapper}`}>
            <button className='button'>inc</button>
            <button className='button'>reset</button>
        </div>
    );
}

export default ControlButtons;