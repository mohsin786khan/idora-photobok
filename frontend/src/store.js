import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
    adminLoginReducer
} from './reducers/adminReducers.js';

const reducer = combineReducers({
    adminLogin: adminLoginReducer,
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store;