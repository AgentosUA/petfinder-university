import { createStore, combineReducers } from 'redux';
import { rootReducer } from './reducers';

const reducers = combineReducers({
    root: rootReducer
})

export const store = createStore(reducers);