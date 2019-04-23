import { GET_SKILLSET, GET_USERSKILLSET } from '../actions/type';

const initialState={
    skillsets: []
}

const article=(state=initialState, action) => {
    switch (action.type) {
        case GET_SKILLSET:
        return {
            ...state,
            skillsets: action.payload 
        }
        case GET_USERSKILLSET:
        return {
            ...state,
            skillsets: action.payload
        }
        default:
            return state;
    }
}

export default article;


