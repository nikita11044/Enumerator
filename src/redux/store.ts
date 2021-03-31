import {applyMiddleware, combineReducers, createStore} from "redux";
import {enumeratorReducer} from "./enumerator-reducer";
import thunk from "redux-thunk";
import {loadState, saveSate} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    enumerator: enumeratorReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveSate(store.getState())
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store