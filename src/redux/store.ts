import {combineReducers, createStore} from "redux";
import {enumeratorReducer} from "./enumerator-reducer";

const rootReducer = combineReducers({
    enumerator: enumeratorReducer
})

export const store = createStore(rootReducer)

// store.subscribe(() => {
//     localStorage.setItem('maxNumber', JSON.stringify(store.getState().enumerator.maxNumber))
//     localStorage.setItem('minNumber', JSON.stringify(store.getState().enumerator.minNumber))
//     localStorage.setItem('displayValue', JSON.stringify(store.getState().enumerator.displayedNumber))
// })

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store