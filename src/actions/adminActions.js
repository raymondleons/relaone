import axios from 'axios'
import {
    ADD_USER,
    GET_USER, 
    DEL_USER, 
    GET_ARTICLE, 
    DEL_ARTICLE, 
    GET_ORGANIZATION, 
    DEL_ORGANIZATION,
    GET_EVENT,
    DEL_EVENT,
    GET_USER_TOTAL,
    GET_ARTICLE_TOTAL,
    GET_EVENT_TOTAL,
    GET_ORGANIZATION_TOTAL,
    GET_SKILLSET,
    DEL_SKILLSET,
    GET_PROFILE_ADMIN,
    SIGNIN_ADMIN,
    EDIT_PROFILE} from './type'
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
                type: SIGNIN_ADMIN,
                token: res.data.token,
                role: res.data.data.role
                });
                let message = res.data.message
                toast.success(message)
                history.push('/admin');
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
