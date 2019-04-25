import { GET_VOLUNTEER, SEARCH_VOLUNTEER, GET_APPLICANT, ACCEPT_VOLUNTEER, REJECT_VOLUNTEER } from '../actions/type';

const initialState={
    volunteers: [],
    applicants: []
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
            applicants: action.payload
        }
        case ACCEPT_VOLUNTEER:
        return {
            ...state
        }
        case REJECT_VOLUNTEER:
        return {
            ...state
        }
        default:
            return state;
    }
}

export default volunteer;


