import { GET_PROFILE } from '../actions/type';

const initialState={
    fullname: '',
    photo: '',
    confirmed: false,
    username: '',
    email: '',
    phoneNumber: '',
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
    address: '',
    idCard: '',
}

const orgProfile=(state=initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                fullname: action.fullname,
                photo: action.photo,
                confirmed: action.confirmed,
                email: action.email,
                password: action.password,
                username: action.username,
                phoneNumber: action.phoneNumber,
                address: action.address,
                idCard: action.idCard
            }
        default:
            return state;
    }
}

export default orgProfile