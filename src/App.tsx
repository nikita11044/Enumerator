import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className='panel settings-panel'>
                <div className='monitor'>
                    <form className='value-display'>
                        <label className='max-value-desrc'>max value:   <input type='number' value="0" className='max-value-num'/></label>
                        <label className='min-value-desrc'>min value:   <input type='number' value="0" className='min-value-num'/></label>
                    </form>
                </div>
                <div className='button-wrapper'>
                    <button className='button'>set</button>
                </div>
            </div>
            <div className='panel number-panel'>
                <div className='monitor'>
                    <div className='number-display'>0</div>
                </div>
                <div className='button-wrapper'>
                    <button className='button'>inc</button>
                    <button className='button'>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
