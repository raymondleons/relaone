import { GET_PROFILE } from '../actions/type';

const initialState={
    organizationName: '',
    photo: '',
    confirmed: false,
    username: '',
    email: '',
    phoneNumber: ''
}

const orgProfile=(state=initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                organizationName: action.organizationName,
                photo: action.photo,
                confirmed: action.confirmed
            }
        default:
            return state;
    }
}

export default orgProfile