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
    ADMIN_USERDETAILS_REQUEST,
    ADMIN_USERDETAILS_SUCCESS,
    ADMIN_USERDETAILS_FAIL,
    ADMIN_CREATEUSER_REQUEST, 
    ADMIN_CREATEUSER_SUCCESS,
    ADMIN_CREATEUSER_FAIL,
    ADMIN_UPDATEUSER_REQUEST,
    ADMIN_UPDATEUSER_SUCCESS,
    ADMIN_UPDATEUSER_FAIL,
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

        localStorage.setItem('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.response.data
        })
    }
}

export const showUserList = () => async(dispatch, getState) => {
    try {
        dispatch({type: ADMIN_USERLIST_REQUEST})

        const {adminLogin: {adminInfo}} = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const {data: {users}} = await axios.get('http://localhost:8000/api/v1/adduser/show', config)


        dispatch({
            type: ADMIN_USERLIST_SUCCESS,
            payload: users
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USERLIST_FAIL,
            payload: error.response.data
        })
    }
}

export const deleteUser = (id) => async(dispatch, getState) => {
    try {
        dispatch({type: ADMIN_DELETEUSER_REQUEST})

        const {adminLogin: {adminInfo}} = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        await axios.delete(`http://localhost:8000/api/v1/adduser/delete/${id}`, config)

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

export const showUser = (id) => async(dispatch, getState) => {
    try {
        dispatch({type: ADMIN_USERDETAILS_REQUEST})

        const {adminLogin: {adminInfo}} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const {data} = await axios.get(`http://localhost:8000/api/v1/adduser/show/${id}`, config)

        dispatch({
            type: ADMIN_USERDETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USERDETAILS_FAIL,
            payload: error.response.data
        })
    }
}


export const createUser = (newUser) => async(dispatch, getState) => {
    try {
        dispatch({type: ADMIN_CREATEUSER_REQUEST})

        const {adminLogin: {adminInfo}} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const {data} = await axios.post('http://localhost:8000/api/v1/adduser/create', newUser, config)

        console.log(data)
        
        dispatch({
            type: ADMIN_CREATEUSER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_CREATEUSER_FAIL,
            payload: error.response.data
        })
    }
}

export const updateUser = (user) => async(dispatch, getState) => {
    try {
        dispatch({type: ADMIN_UPDATEUSER_REQUEST})

        const {adminLogin: {adminInfo}} = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const {data} = await axios.put(`http://localhost:8000/api/v1/adduser/edit/${user._id}`, user, config)

        console.log(data)

        dispatch({
            type: ADMIN_UPDATEUSER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_CREATEUSER_FAIL,
            payload: error.response.data
        })
    }
}