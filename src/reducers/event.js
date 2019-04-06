import { GET_EVENT, ADD_EVENT } from '../actions/type';

const initialState={
    events: []
}

const event=(state=initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
        return {
            ...state
        }
        case GET_EVENT:
        return {
            ...state,
            events: action.payload
        }
        default:
            return state;
    }
}

export default event;


