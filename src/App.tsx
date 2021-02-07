import React, {ChangeEvent, useState} from 'react';
import './App.css';
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import ControlPanel from "./components/ControlPanel/ControlPanel";

function App() {
    const [maxValue, setMaxValue] = useState<string>('0')
    const [minValue, setMinValue] = useState<string>('0')

    const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value
        const currentID = e.currentTarget.id

        if (currentValue) {
            switch (currentID) {
                case 'maxNumber':
                    setMaxValue(currentValue)
                    break;
                case 'minNumber' :
                    setMinValue(currentValue)
                    break;
            }
        }
    }

    return (
        <div className="App">
            <SettingsPanel updateValue={updateValue} maxValue={maxValue} minValue={minValue}/>
            <ControlPanel />
        </div>
    );
}

export default App;
