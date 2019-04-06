import { ADD_EVENT } from '../actions/type';

const initialState={
    events: []
}

const event=(state=initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
        return {
            ...state
        }
        default:
            return state;
    }
}

export default event;


