import { GET_PROFILE, EDIT_PROFILE, EDIT_PROFILE_PHOTO, SIGN_IN_ORG } from '../actions/type';

const initialState={
    organizationName: '',
    photo: '',
    confirmed: false,
    username: '',
    email: '',
<<<<<<< HEAD
    phoneNumber: '',
    token:''
}
=======
    phoneNumber: ''
} 
>>>>>>> ac6c27a541854d9512b40f6c63cf2d36f7ab1e35

const orgProfile=(state=initialState, action) => {
    switch (action.type) {
        case SIGN_IN_ORG:
            localStorage.setItem('token', action.token)
            return {
                ...state,
                token: action.token
            }
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