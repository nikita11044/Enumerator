import React from 'react';
import NumberDisplay from "./NumberDisplay/NumberDisplay";
import ControlButtons from "./ControlButtons/ControlButtons";

type ControlPanelPropsType = {
    increment: () => void
    reset: () => void
    displayedValue: string
    incButtonDisabledCondition: boolean
    resetButtonDisabledCondition: boolean
    error: boolean
}

const ControlPanel: React.FC<ControlPanelPropsType> = ({displayedValue, increment, reset, incButtonDisabledCondition,resetButtonDisabledCondition, error}) => {
    return (
        <div className='panel control-panel'>
            <NumberDisplay displayedValue={displayedValue} incButtonDisabledCondition={incButtonDisabledCondition} error={error}/>
            <ControlButtons increment={increment} reset={reset} incButtonDisabledCondition={incButtonDisabledCondition} resetButtonDisabledCondition={resetButtonDisabledCondition}/>
        </div>
    );
}

export default ControlPanel;