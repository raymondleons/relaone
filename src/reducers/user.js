import { GET_USER, ADD_USER, DEL_USER, GET_USER_TOTAL } from '../actions/type';

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
        case ADD_USER:
        return {
            ...state,
            users: [...state.users, action.payload]
        }
        case GET_USER_TOTAL:
        return {
            ...state,
            users: action.payload
        }
        case DEL_USER:
        return {
            ...state,
            users: [...state.users.filter(user => user._id !== action.id)]
        }
        default:
            return state;
    }
}

export default article;


