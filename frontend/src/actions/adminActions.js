import axios from 'axios';

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
} from '../constants/adminConstants';

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({type: ADMIN_LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('http://localhost:8000/api/v1/admin/signin', {email, password}, config)

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.response.data
        })
    }
}

export const showUserList = () => async(dispatch) => {
    try {
        dispatch({type: ADMIN_USERLIST_REQUEST})

        const {data} = await axios.get('http://localhost:8000/api/v1/adduser/show')

        dispatch({
            type: ADMIN_USERLIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USERLIST_FAIL,
            payload: error.response.data
        })
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try {
        dispatch({type: ADMIN_DELETEUSER_REQUEST})

        await axios.delete(`http://localhost:8000/api/v1/adduser/delete${id}`)

        dispatch({
            type: ADMIN_DELETEUSER_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: ADMIN_DELETEUSER_FAIL,
            payload: error.response.data
        })
    }
}