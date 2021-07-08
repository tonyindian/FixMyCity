import { createStore, combineReducers } from 'redux';
import createIssueReducer from "./createIssueReducer"

const reducers = combineReducers({
    createIssueReducer,
})

const store = createStore(reducers);

export default store;