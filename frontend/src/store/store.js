import { applyMiddleware,createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createIssueCoordinatesReducer from "./createIssueCoordinatesReducer"
import profileInfoReducer from './profileInfoReducer';


const middleware = [thunk];

const reducers = combineReducers({
    createIssueCoordinatesReducer,
    profileInfoReducer,
})

const store = createStore(reducers,composeWithDevTools(
	applyMiddleware(...middleware),
));

export default store;