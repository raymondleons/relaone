import axios from 'axios';
import { ADD_EVENT, GET_ARTICLE } from './type';
import { DEL_ARTICLE } from './type';

export const addEvent = () => {
    return {
        type: ADD_EVENT
    }
}

export const delArticle = id => {
    return {
        type: DEL_ARTICLE,
        payload: id
    }
}

export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/member/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTE2NzQ1MWJlODZkNjlhY2Q2MTg4NSIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYWhheWRlQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiaW5kcmEiLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNTU0NTI4NDA5LCJleHAiOjE1NTUxMzMyMDl9.FshP-mBV_f_qbo1o9AVqKWozylluYTvNzDwHWJ1EVQ0"}
        })
        .then(res => {
            console.log(res)
            dispatch ({
                type: GET_ARTICLE,
                payload: res.data.data
            })
        })
    }
   
    // {
    //     type: GET_ARTICLE
    // }
}