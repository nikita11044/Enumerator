import React, {ChangeEvent} from 'react';
import SettingsForm from "./SettingsForm/SettingsForm";
import SettingsButton from "./SettingsButton/SettingsButton";

type SettingsPanelPropsType = {
    updateValue: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: string
    minValue: string
}

const SettingsPanel: React.FC<SettingsPanelPropsType> = ({updateValue, maxValue, minValue}) => {
    return (
        <div className='panel settings-panel'>
            <SettingsForm updateValue={updateValue} maxValue={maxValue} minValue={minValue}/>
            <SettingsButton />
        </div>
    );
}

export default SettingsPanel;