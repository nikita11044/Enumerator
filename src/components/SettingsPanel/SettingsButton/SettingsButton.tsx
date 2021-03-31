import React from 'react';
import CustomButton from "../../CustomButton/CustomButton";
import {actions} from "../../../redux/enumerator-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";

const SettingsButton: React.FC = () => {
    const dispatch = useDispatch()
    const setValues = () => dispatch(actions.setValues())
    const setButtonDisabledCondition = useSelector<AppStateType, boolean>(state => state.enumerator.setButtonDisabledCondition)
    return (
            <div className='button-wrapper'>
                <CustomButton disabledCondition={setButtonDisabledCondition} buttonText={'set'} callback={setValues}/>
            </div>
    );
}

export default SettingsButton;