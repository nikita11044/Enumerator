import React from 'react';
import NumberDisplay from "./NumberDisplay/NumberDisplay";
import ControlButtons from "./ControlButtons/ControlButtons";

type ControlPanelPropsType = {
    increment: () => void
    reset: () => void
    displayedValue: string
    incButtonDisabledCondition: boolean
}

const ControlPanel: React.FC<ControlPanelPropsType> = ({displayedValue, increment, reset, incButtonDisabledCondition}) => {
    return (
        <div className='panel control-panel'>
            <NumberDisplay displayedValue={displayedValue} incButtonDisabledCondition={incButtonDisabledCondition} />
            <ControlButtons increment={increment} reset={reset} incButtonDisabledCondition={incButtonDisabledCondition} />
        </div>
    );
}

export default ControlPanel;