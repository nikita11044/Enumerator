import React from 'react';
import CustomButton from "../../CustomButton/CustomButton";

type SettingsButtonPropsType = {
    updateDisplay: () => void
    setButtonDisabledCondition: boolean
}

const SettingsButton: React.FC<SettingsButtonPropsType> = ({updateDisplay, setButtonDisabledCondition}) => {
    return (
            <div className='button-wrapper'>
                <CustomButton callback={updateDisplay} buttonText={'set'} disabled={setButtonDisabledCondition}/>
            </div>
    );
}

export default SettingsButton;