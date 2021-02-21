import React, {ChangeEvent} from 'react';
import SettingsForm from "./SettingsForm/SettingsForm";
import SettingsButton from "./SettingsButton/SettingsButton";

type SettingsPanelPropsType = {
    updateValue: (e: ChangeEvent<HTMLInputElement>) => void
    updateDisplay: () => void
    maxValue: string
    minValue: string
    setButtonDisabledCondition: boolean
    error: boolean
}

const SettingsPanel: React.FC<SettingsPanelPropsType> = ({updateValue, updateDisplay, maxValue, minValue, setButtonDisabledCondition, error}) => {
    return (
        <div className='panel settings-panel'>
            <SettingsForm updateValue={updateValue} maxValue={maxValue} minValue={minValue} error={error}/>
            <SettingsButton updateDisplay={updateDisplay} setButtonDisabledCondition={setButtonDisabledCondition}/>
        </div>
    );
}

export default SettingsPanel;