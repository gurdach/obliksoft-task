import { createStore, applyMiddleware, combineReducers } from 'redux';
import tableReducer from './reducers/tableReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    table: tableReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))