import React from 'react';
import classes from './ControlButtons.module.css'
import CustomButton from "../../CustomButton/CustomButton";

const ControlButtons: React.FC = () => {
    return (
        <div className={`button-wrapper ${classes.buttonWrapper}`}>
            <CustomButton buttonText={'inc'}/>
            <CustomButton buttonText={'reset'}/>
        </div>
    );
}

export default ControlButtons;