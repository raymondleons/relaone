import { GET_VOLUNTEER, SEARCH_VOLUNTEER } from '../actions/type';

const initialState={
    volunteers: []
}

const volunteer=(state=initialState, action) => {
    switch (action.type) {
        case GET_VOLUNTEER:
        return {
            ...state,
            volunteers: action.payload 
        }
        case SEARCH_VOLUNTEER:
        return {
            ...state,
            volunteers: action.payload
        }
        default:
            return state;
    }
}

export default volunteer;


