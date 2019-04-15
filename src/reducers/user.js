import { GET_USER } from '../actions/type';

const initialState={
    users: []
}

const article=(state=initialState, action) => {
    switch (action.type) {
        case GET_USER:
        return {
            ...state,
            users: action.payload 
        }
        default:
            return state;
    }
}

export default article;


