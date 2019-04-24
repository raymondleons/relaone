import { GET_ARTICLE, SEARCH_ARTICLE, ADD_ARTICLE, DEL_ARTICLE, GET_ARTICLE_TOTAL } from '../actions/type';

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
        case SEARCH_ARTICLE:
        return {
            ...state,
            articles: action.payload
        }
        case ADD_ARTICLE:
        return {
            ...state,
            articles: [...state.articles, action.payload]
        }
        case DEL_ARTICLE:
        return {
            ...state,
            articles: [...state.articles.filter(article => article._id !== action.id)]
        }
        case GET_ARTICLE_TOTAL:
        return {
            ...state,
            articles: action.payload
        }
        default:
            return state;
    }
}

export default article;


