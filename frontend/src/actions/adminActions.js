import axios from 'axios';

import {
    ADMIN_LOGIN_REQUEST, 
    ADMIN_LOGIN_SUCCESS, 
    ADMIN_LOGIN_FAIL
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