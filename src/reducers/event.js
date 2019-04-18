import { GET_EVENT, ADD_EVENT, DEL_EVENT, EDIT_EVENT } from '../actions/type';

const initialState={
    events: []
}

const event=(state=initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
        return {
            ...state,
            events: [...state.events, action.payload]
        }
        case GET_EVENT:
        return {
            ...state,
            events: action.payload
        }
        case DEL_EVENT:
        return {
            ...state,
            events: [...state.events.filter(event => event._id !== action.id)]
        }
        case EDIT_EVENT:
        return {
            ...state
        }
        default:
            return state;
    }
}

export default event;


