import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import ControlPanel from "./components/ControlPanel/ControlPanel";

function App() {
    const [maxValue, setMaxValue] = useState<string>('0')
    const [minValue, setMinValue] = useState<string>('0')
    const [displayedValue, setDisplayedValue] = useState<string>('Set values and click the button')
    // const [isMaxNumber, setIsMaxNumber] = useState<boolean>(false)
    const [setButtonDisabledCondition, setSetButtonDisabledCondition] = useState<boolean>(true)
    const [incButtonDisabledCondition, setIncButtonDisabledCondition] = useState<boolean>(false)
    const [resetButtonDisabledCondition, setResetButtonDisabledCondition] = useState<boolean>(false)

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

        setSetButtonDisabledCondition(false)
    }

    const setValuesToLocalStorage = () => {
        localStorage.setItem('maxNumber', JSON.stringify(maxValue))
        localStorage.setItem('minNumber', JSON.stringify(minValue))
        localStorage.setItem('displayValue', JSON.stringify(displayedValue))
    }

    const getValuesFromLocalStorage = () => {
        const max = localStorage.getItem('maxNumber')
        const min = localStorage.getItem('minNumber')
        const displayedValue = localStorage.getItem('displayValue')

        if (max) {
            setMaxValue(JSON.parse(max))
        }

        if (min) {
            setMinValue(JSON.parse(min))
        }

        if (displayedValue) {
            setDisplayedValue(JSON.parse(displayedValue))
        }
    }

    const updateDisplay = () => {
        setDisplayedValue(minValue)
        setSetButtonDisabledCondition(true)
    }

    const increment = () => {
        const display = Number(displayedValue)
        const max = Number(maxValue)

        if(display < max) {
            setDisplayedValue(`${display + 1}`)
        }

        if((display + 1) === max) {
            setIncButtonDisabledCondition(true)
        }
    }

    const reset = () => {
        setDisplayedValue(minValue)
        setIncButtonDisabledCondition(false)
        setSetButtonDisabledCondition(false)
    }

    useEffect(() => {
        getValuesFromLocalStorage()
        setDisplayedValue('Set values')
    }, [])

    useEffect(() => {
        setValuesToLocalStorage()
    }, [maxValue, minValue, displayedValue])

    return (
        <div className="App">
            <SettingsPanel updateValue={updateValue} updateDisplay={updateDisplay} maxValue={maxValue} minValue={minValue} setButtonDisabledCondition={setButtonDisabledCondition}/>
            <ControlPanel increment={increment} reset={reset} displayedValue={displayedValue} incButtonDisabledCondition={incButtonDisabledCondition}/>
        </div>
    );
}

export default App;
