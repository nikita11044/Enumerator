const initialState = {
    minNumber: 0,
    maxNumber: 0,
    displayedNumber: 0,
    error: false
}

type InitialStateType = typeof initialState

export const enumeratorReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-VALUE': {
            if (action.fieldId === 'maxNumber') {
                return {...state, maxNumber: +action.newValue}
            } else if (action.fieldId === 'minNumber') {
                return {...state, minNumber: +action.newValue}
            }
        }
    }
    return state
}

export const actions = {
    updateValue: (fieldId: string, newValue: string) => ({type: 'UPDATE-VALUE' as const, fieldId, newValue}),
    incValue: () => ({type: 'INCREMENT' as const}),
    decrValue: () => ({type: 'DECREMENT' as const}),
    setValues: (value: number) => ({type: 'SET-VALUES' as const, displayedNumber: value}),
    resetValues: () => ({type: 'RESET-VALUES' as const})
}

type InferActionTypes<T> = T extends {[key: string]: infer U} ? U : never
export type ActionTypes = ReturnType<InferActionTypes<typeof actions>>