import React from 'react';
import './App.css';
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import ControlPanel from "./components/ControlPanel/ControlPanel";

function App() {
    return (
        <div className="App">
            <SettingsPanel />
            <ControlPanel />
        </div>
    );
}

export default App;
