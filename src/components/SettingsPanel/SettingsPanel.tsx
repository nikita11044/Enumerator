import React, {ChangeEvent} from 'react';
import SettingsForm from "./SettingsForm/SettingsForm";
import SettingsButton from "./SettingsButton/SettingsButton";

type SettingsPanelPropsType = {
    updateValue: (e: ChangeEvent<HTMLInputElement>) => void
    updateDisplay: () => void
    maxValue: string
    minValue: string
    setButtonDisabledCondition: boolean
}

const SettingsPanel: React.FC<SettingsPanelPropsType> = ({updateValue, updateDisplay, maxValue, minValue, setButtonDisabledCondition}) => {
    return (
        <div className='panel settings-panel'>
            <SettingsForm updateValue={updateValue} maxValue={maxValue} minValue={minValue}/>
            <SettingsButton updateDisplay={updateDisplay} setButtonDisabledCondition={setButtonDisabledCondition}/>
        </div>
    );
}

export default SettingsPanel;