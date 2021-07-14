import { createStore, combineReducers } from 'redux';
import createIssueCoordinatesReducer from "./createIssueCoordinatesReducer"

const reducers = combineReducers({
    createIssueCoordinatesReducer,
})

const store = createStore(reducers);

export default store;