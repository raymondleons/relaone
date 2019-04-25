import { 
    SIGNIN_ADMIN,
    GET_PROFILE_ADMIN,
    EDIT_PROFILE_ADMIN } from '../actions/type';

const initialState={
    fullname: '',
    name: '',
    confirmed: false,
    username: '',
    email: '',
    token:'',
    role:''
}

const admin=(state=initialState, action) => {
    switch (action.type) {
        case SIGNIN_ADMIN:
            localStorage.setItem('token', action.token)
            localStorage.setItem('role', action.role)
            return {
                ...state,
                token: action.token,
                role: action.role
            }
            case GET_PROFILE_ADMIN:
            return {
                ...state,
                name: action.name,
                confirmed: action.confirmed,
                username: action.username,
                email: action.email,
            }
            case EDIT_PROFILE_ADMIN:
            return {
                ...state,
                organizationName: action.organizationName,
                confirmed: action.confirmed, 
                username: action.username,
                email: action.email,
                phoneNumber: action.phoneNumber
            }
        default:
            return state;
    }
}

export default admin;


