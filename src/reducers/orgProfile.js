import { GET_PROFILE, EDIT_PROFILE, EDIT_PROFILE_PHOTO } from '../actions/type';

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
                confirmed: action.confirmed,
                username: action.username,
                email: action.email,
                phoneNumber: action.phoneNumber
            }
        case EDIT_PROFILE:
            return {
                ...state,
                organizationName: action.organizationName,
                confirmed: action.confirmed, 
                username: action.username,
                email: action.email,
                phoneNumber: action.phoneNumber
            }
        case EDIT_PROFILE_PHOTO:
            return {
                ...state,
                photo: action.photo
            }
        default:
            return state;
    }
}

export default orgProfile