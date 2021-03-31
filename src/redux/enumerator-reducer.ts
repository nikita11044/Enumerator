const initialState = {
    minNumber: 0,
    maxNumber: 0,
    displayedValue: 'Choose values',
    error: false,
    setButtonDisabledCondition: false,
    incButtonDisabledCondition: true,
    resetButtonDisabledCondition: true
}

type InitialStateType = typeof initialState

export const enumeratorReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-VALUE': {
            const copyState = {
                ...state,
                [action.fieldId]: +action.newValue,
                setButtonDisabledCondition: false,
                incButtonDisabledCondition: true,
                resetButtonDisabledCondition: true
            }
            if (copyState.minNumber >= copyState.maxNumber || copyState.minNumber < 0) {
                return {
                    ...copyState,
                    error: true
                }
            } else {
                return {
                    ...copyState,
                    [action.fieldId]: +action.newValue,
                    error: false
                }
            }
        }
        case 'SET-VALUES': {
            return {
                ...state,
                displayedValue: state.minNumber.toString(),
                setButtonDisabledCondition: true,
                incButtonDisabledCondition: false
            }
        }
        case 'INCREMENT': {
            const max = state.maxNumber
            const display = +state.displayedValue
            const isMax = (display + 1) === max
            return  {
                ...state,
                displayedValue: `${display + 1}`,
                incButtonDisabledCondition: isMax,
                resetButtonDisabledCondition: !isMax
            }
        }
        case 'RESET-VALUES': {
            return {
                ...state,
                displayedValue: state.minNumber.toString(),
                incButtonDisabledCondition: false,
                setButtonDisabledCondition: false
            }
        }
        default:
            return state
    }
}

export const actions = {
    updateValue: (fieldId: string, newValue: string) => ({type: 'UPDATE-VALUE' as const, fieldId, newValue}),
    incValue: () => ({type: 'INCREMENT' as const}),
    setValues: () => ({type: 'SET-VALUES' as const}),
    resetValues: () => ({type: 'RESET-VALUES' as const})
}

type InferActionTypes<T> = T extends {[key: string]: infer U} ? U : never
export type ActionTypes = ReturnType<InferActionTypes<typeof actions>>