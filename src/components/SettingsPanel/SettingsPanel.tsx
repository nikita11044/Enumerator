import React from 'react';
import SettingsForm from "./SettingsForm/SettingsForm";
import SettingsButton from "./SettingsButton/SettingsButton";

const SettingsPanel = () => {
    return (
        <div className='panel settings-panel'>
            <SettingsForm />
            <SettingsButton />
        </div>
    );
}

export default SettingsPanel;