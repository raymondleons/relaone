import { GET_VOLUNTEER, SEARCH_VOLUNTEER, GET_APPLICANT } from '../actions/type';

const initialState={
    volunteers: [],
    applicant: []
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
        case GET_APPLICANT:
        return {
            ...state,
            applicant: action.payload
        }
        default:
            return state;
    }
}

export default volunteer;


