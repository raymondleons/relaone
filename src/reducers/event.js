import { GET_EVENT, ADD_EVENT, GET_USEREVENT, DEL_EVENT, GET_USERJOINEDEVENT, USER_JOINEVENT, SEARCH_EVENT, EDIT_EVENT, GET_EVENT_TOTAL} from '../actions/type';

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
        case GET_USEREVENT:
        return {
            ...state,
            events: action.payload
        }
        case USER_JOINEVENT:
        return {
            ...state
        }
        case GET_USERJOINEDEVENT:
        return {
            ...state,
            events: action.payload
        }
        case DEL_EVENT:
        return {
            ...state,
            events: [...state.events.filter(event => event._id !== action.id)]
        }
        case SEARCH_EVENT:
        return {
            ...state,
            events: action.payload
        }
        case EDIT_EVENT:
        return {
            ...state
        }
        case GET_EVENT_TOTAL:
        return {
            ...state,
            events: action.payload
        }
        default:
            return state;
    }
}

export default event;


