import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
    adminLoginReducer,
    adminUserListReducer,
    adminUserDeleteReducer,
    adminUserReducer,
    createUserReducer,
    updateAdminUserReducer,
    productListReducer,
} from './reducers/adminReducers.js';

const reducer = combineReducers({
    adminLogin: adminLoginReducer,
    adminUserList: adminUserListReducer,
    adminUserDelete: adminUserDeleteReducer,
    adminUser: adminUserReducer,
    createNewUser: createUserReducer,
    updateAdminUser: updateAdminUserReducer,
    productList: productListReducer,
})

const adminInfoFromStorage = localStorage.getItem('adminInfo') ? JSON.parse
    ( localStorage.getItem('adminInfo')) : null

const initialState = {
    adminLogin: {adminInfo: adminInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store;