import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import ControlPanel from "./components/ControlPanel/ControlPanel";

function App() {
    const [maxValue, setMaxValue] = useState<string>('0')
    const [minValue, setMinValue] = useState<string>('0')
    const [displayedValue, setDisplayedValue] = useState<string>('Set values and click the button')
    const [error, setError] = useState<boolean>(false)
    const [setButtonDisabledCondition, setSetButtonDisabledCondition] = useState<boolean>(true)
    const [incButtonDisabledCondition, setIncButtonDisabledCondition] = useState<boolean>(false)
    const [resetButtonDisabledCondition, setResetButtonDisabledCondition] = useState<boolean>(false)

    const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value
        const currentID = e.currentTarget.id

        if (currentValue) {
            switch (currentID) {
                case 'maxNumber':
                    if (Number(currentValue) <= Number(minValue)) {
                        setError(true)
                        setSetButtonDisabledCondition(true)
                        setIncButtonDisabledCondition(true)
                        setResetButtonDisabledCondition(true)
                    } else {
                        setError(false)
                        setSetButtonDisabledCondition(false)
                        setIncButtonDisabledCondition(false)
                        setResetButtonDisabledCondition(false)
                    }
                    setMaxValue(currentValue)
                    break
                case 'minNumber' :
                    if (Number(currentValue) >= Number(maxValue)) {
                        setError(true)
                        setSetButtonDisabledCondition(true)
                        setIncButtonDisabledCondition(true)
                        setResetButtonDisabledCondition(true)
                    } else {
                        setError(false)
                        setSetButtonDisabledCondition(false)
                        setIncButtonDisabledCondition(false)
                        setResetButtonDisabledCondition(false)
                    }
                    setMinValue(currentValue)
                    break
            }
        }
    }

    const setValuesToLocalStorage = () => {
        localStorage.setItem('maxNumber', JSON.stringify(maxValue))
        localStorage.setItem('minNumber', JSON.stringify(minValue))
        localStorage.setItem('displayValue', JSON.stringify(displayedValue))
        localStorage.setItem('setButtonDisabled', JSON.stringify(setButtonDisabledCondition))
        localStorage.setItem('incButtonDisabled', JSON.stringify(incButtonDisabledCondition))
        localStorage.setItem('resetButtonDisabled', JSON.stringify(resetButtonDisabledCondition))
    }

    const getValuesFromLocalStorage = () => {
        const max = localStorage.getItem('maxNumber')
        const min = localStorage.getItem('minNumber')
        const displayedValue = localStorage.getItem('displayValue')
        const setButtonDisabled = localStorage.getItem('setButtonDisabled')
        const incButtonDisabled = localStorage.getItem('incButtonDisabled')
        const resetButtonDisabled = localStorage.getItem('resetButtonDisabled')

        if (max) {
            setMaxValue(JSON.parse(max))
        }

        if (min) {
            setMinValue(JSON.parse(min))
        }

        if (displayedValue) {
            setDisplayedValue(JSON.parse(displayedValue))
        }

        if (setButtonDisabled) {
            setSetButtonDisabledCondition(JSON.parse(setButtonDisabled))
        }

        if (incButtonDisabled) {
            setIncButtonDisabledCondition(JSON.parse(incButtonDisabled))
        }

        if (resetButtonDisabled) {
            setResetButtonDisabledCondition(JSON.parse(resetButtonDisabled))
        }
    }

    const updateDisplay = () => {
        setDisplayedValue(minValue)
        setSetButtonDisabledCondition(true)
    }

    const increment = () => {
        const display = Number(displayedValue)
        const max = Number(maxValue)

        if (display < max) {
            setDisplayedValue(`${display + 1}`)
        }

        if ((display + 1) === max) {
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
    }, [])

    useEffect(() => {
        setValuesToLocalStorage()
    }, [maxValue, minValue, displayedValue, setButtonDisabledCondition, incButtonDisabledCondition, resetButtonDisabledCondition])

    return (
        <div className="App">
            <SettingsPanel updateValue={updateValue} updateDisplay={updateDisplay} maxValue={maxValue}
                           minValue={minValue} setButtonDisabledCondition={setButtonDisabledCondition} error={error}/>
            <ControlPanel increment={increment} reset={reset} displayedValue={displayedValue}
                          incButtonDisabledCondition={incButtonDisabledCondition}
                          resetButtonDisabledCondition={resetButtonDisabledCondition} error={error}/>
        </div>
    );
}

export default App;
