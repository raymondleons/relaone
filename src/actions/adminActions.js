import axios from 'axios'
import {GET_USER, SIGN_IN_ADMIN} from './type'
import history from '../history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
        position: "top-center"}
)

const url = "https://relaonebinar.herokuapp.com/api";

export const signInAdmin = (username, password) => {
    return dispatch => {
        axios ({
            url: `${url}/admin/login`,
            method: 'post',
            data: {
                username,
                password
            }
        })
            .then(res => {
                dispatch({
                type: SIGN_IN_ADMIN,
                token: res.data.token,
                role: res.data.data.role
                });
                let message = res.data.message
                toast.success(message)
                history.push('/organization/event');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}
export const getUser = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/admin/member',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
        .then(res => {
            dispatch ({
                type: GET_USER,
                payload: res.data.data
            })
        })
    }
}
