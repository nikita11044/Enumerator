import React from 'react';
import CustomButton from "../../CustomButton/CustomButton";

const SettingsButton: React.FC = () => {
    return (
            <div className='button-wrapper'>
                <CustomButton buttonText={'set'}/>
            </div>
    );
}

export default SettingsButton;