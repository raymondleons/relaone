import { GET_ARTICLE } from '../actions/type';

const initialState={
    articles: []
}

const article=(state=initialState, action) => {
    switch (action.type) {
        case GET_ARTICLE:
        return {
            ...state,
            articles: action.payload 
        }
        default:
            return state;
    }
}

export default article;


