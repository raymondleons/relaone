import { GET_SKILLSET } from '../actions/type';

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
        default:
            return state;
    }
}

export default article;


