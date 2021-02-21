import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_USERLIST_REQUEST,
    ADMIN_USERLIST_SUCCESS,
    ADMIN_USERLIST_FAIL,
    ADMIN_DELETEUSER_REQUEST,
    ADMIN_DELETEUSER_SUCCESS,
    ADMIN_DELETEUSER_FAIL,
    ADMIN_USERDETAILS_REQUEST,
    ADMIN_USERDETAILS_SUCCESS,
    ADMIN_USERDETAILS_FAIL,
    ADMIN_CREATEUSER_REQUEST,
    ADMIN_CREATEUSER_SUCCESS,
    ADMIN_CREATEUSER_FAIL,
    ADMIN_UPDATEUSER_REQUEST,
    ADMIN_UPDATEUSER_SUCCESS,
    ADMIN_UPDATEUSER_FAIL,
    ADMIN_CREATEUSER_RESET,
    ADMIN_UPDATEUSER_RESET,
    ADMIN_PRODUCTLIST_REQUEST,
    ADMIN_PRODUCTLIST_SUCCESS,
    ADMIN_PRODUCTLIST_FAIL,
    ADMIN_DELETEPRODUCT_REQUEST,
    ADMIN_DELETEPRODUCT_SUCCESS,
    ADMIN_DELETEPRODUCT_FAIL,
    ADMIN_ADDPRODUCT_REQUEST,
    ADMIN_ADDPRODUCT_SUCCESS,
    ADMIN_ADDPRODUCT_FAIL,
    ADMIN_ADDPRODUCT_RESET,
} from '../constants/adminConstants.js';

// * ADMIN USERMANAGEMENT REDUCERS 

export const adminLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case ADMIN_LOGIN_REQUEST:
            return {loading: true}
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

export const adminUserListReducer = (state={}, action) => {
    switch(action.type) {
        case ADMIN_USERLIST_REQUEST:
            return {loading: true}
        case ADMIN_USERLIST_SUCCESS:
            return {
                loading: false, 
                userList: action.payload
            }
        case ADMIN_USERLIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const adminUserDeleteReducer = (state={}, action) => {
    switch(action.type) {
        case ADMIN_DELETEUSER_REQUEST:
            return {loading: true}
        case ADMIN_DELETEUSER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ADMIN_DELETEUSER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const adminUserReducer = (state={user: {}}, action) => {
    switch(action.type) {
        case ADMIN_USERDETAILS_REQUEST:
            return {loading: true}
        case ADMIN_USERDETAILS_SUCCESS:
            return {
                loading: false, 
                user: action.payload
            }
        case ADMIN_USERDETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const createUserReducer = (state={}, action) => {
    switch(action.type) {
        case ADMIN_CREATEUSER_REQUEST:
            return {loading: true}
        case ADMIN_CREATEUSER_SUCCESS:
            return {
                loading: false,
                success: true,
                createdUser: action.payload
            }
        case ADMIN_CREATEUSER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case ADMIN_CREATEUSER_RESET:
            return {}
        default:
            return state
    }
}

export const updateAdminUserReducer = (state={user: {}}, action) => {
    switch(action.type) {
        case ADMIN_UPDATEUSER_REQUEST:
            return {loading: true}
        case ADMIN_UPDATEUSER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ADMIN_UPDATEUSER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case ADMIN_UPDATEUSER_RESET:
            return {user: {}}
        default:
            return state
    }
}

// * ADMIN PRODUCTMANAGEMENT REDUCERS 

export const productListReducer = (state={}, action) => {
    switch(action.type) {
        case ADMIN_PRODUCTLIST_REQUEST:
            return {loading: true}
        case ADMIN_PRODUCTLIST_SUCCESS:
            return {
                loading: false,
                listproducts: action.payload
            }
        case ADMIN_PRODUCTLIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const productDeleteReducer = (state={}, action) => {
    switch (action.type) {
        case ADMIN_DELETEPRODUCT_REQUEST:
            return {loading: true}
        case ADMIN_DELETEPRODUCT_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ADMIN_DELETEPRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const productCreateReducer = (state={}, action) => {
    switch (action.type) {
        case ADMIN_ADDPRODUCT_REQUEST:
            return {loading: true}
        case ADMIN_ADDPRODUCT_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ADMIN_ADDPRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case ADMIN_ADDPRODUCT_RESET:
            return {}
        default:
            return state
    }
}