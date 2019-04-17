import axios from 'axios';
import { GET_EVENT } from './type';

export const getEvent = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/public/allevent')
        .then(res => {
            dispatch ({
                type: GET_EVENT,
                payload: res.data.data
            })
        })
    }
}
