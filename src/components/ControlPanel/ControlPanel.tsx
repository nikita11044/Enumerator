import React from 'react';
import NumberDisplay from "./NumberDisplay/NumberDisplay";
import ControlButtons from "./ControlButtons/ControlButtons";

const ControlPanel = () => {
    return (
        <div className='panel control-panel'>
            <NumberDisplay />
            <ControlButtons />
        </div>
    );
}

export default ControlPanel;