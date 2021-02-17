import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
} from '../constants/adminConstants.js';

export const adminLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case ADMIN_LOGIN_REQUEST:
            return {
                loading: true
            }
        case ADMIN_LOGIN_SUCCESS:
            return {
                loading: false,
                adminInfo: action.payload
            }
        case ADMIN_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}