import axios from 'axios';
import { GET_SKILLSET } from './type';

export const getSkillset = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/skillset',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0NTMxODg1LCJleHAiOjE1NTUxMzY2ODV9.T_OuGDlVGX4grnzoS8XSB__KoxjlMkl7m3XQUa52ufA"}
        })
        .then(res => {
            console.log(res)
            dispatch ({
                type: GET_SKILLSET,
                payload: res.data.data
            })
        })
    }
}


