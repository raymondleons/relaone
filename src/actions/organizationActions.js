import axios from 'axios';
<<<<<<< HEAD
import { ADD_EVENT, GET_SKILLSET, GET_EVENT, GET_PROFILE, DELL_EVENT, DEL_EVENT, EDIT_PROFILE, SIGN_UP } from './type';
=======
import { ADD_EVENT, GET_SKILLSET, GET_EVENT, GET_PROFILE, DEL_EVENT, EDIT_PROFILE, GET_ARTICLE } from './type';
>>>>>>> 1ba1d3a25f4cf8079c92df70de70b9f4f8ff5e66

export const getSkillset = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/skillset',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0NTMxODg1LCJleHAiOjE1NTUxMzY2ODV9.T_OuGDlVGX4grnzoS8XSB__KoxjlMkl7m3XQUa52ufA"}
        })
        .then(res => {
            dispatch ({
                type: GET_SKILLSET,
                payload: res.data.data
            })
        })
    }
}

export const getEvent = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/event',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0NTMxODg1LCJleHAiOjE1NTUxMzY2ODV9.T_OuGDlVGX4grnzoS8XSB__KoxjlMkl7m3XQUa52ufA"}
        })
        .then(res => {
            dispatch ({
                type: GET_EVENT,
                payload: res.data.data
            })
        })
    }
}

export const addEvent = (title, description, deadline, location, quotaMax, skillSet) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/event',
            method: 'post',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0NTMxODg1LCJleHAiOjE1NTUxMzY2ODV9.T_OuGDlVGX4grnzoS8XSB__KoxjlMkl7m3XQUa52ufA'
            },
            data: {
                title,
                description,
                deadline,
                location,
                quotaMax,
                skillSet
            }
        })
            .then(res => {
                dispatch({
                type: ADD_EVENT
                })
              }
            )
            .catch(err => console.log(err))
    }
}

export const delEvent = (id) => {
    return dispatch => {
        axios({
            url: 'https://relaonebinar.herokuapp.com/api/organization/event',
            method: 'delete',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0NTMxODg1LCJleHAiOjE1NTUxMzY2ODV9.T_OuGDlVGX4grnzoS8XSB__KoxjlMkl7m3XQUa52ufA'
            },
            data: {
                id
            }
            })
            .then(res => {
                dispatch ({
                    type: DEL_EVENT,
                    id
                })
            })
            .catch(err => console.log(err))
        }
    }


export const getProfile = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/profile',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0NTMxODg1LCJleHAiOjE1NTUxMzY2ODV9.T_OuGDlVGX4grnzoS8XSB__KoxjlMkl7m3XQUa52ufA"}
        })
        .then(res => {
            dispatch ({
                type: GET_PROFILE,
                organizationName: res.data.data.organizationName,
                photo: res.data.data.photo,
                confirmed: res.data.data.confirmed,
                username: res.data.data.username,
                email: res.data.data.email,
                phoneNumber: res.data.data.phoneNumber
            })
        })
    }
}

export const editProfile = (organizationName, username, email, phoneNumber, photo) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/event',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0OTUyODU4LCJleHAiOjE1NTU1NTc2NTh9.hjnTlrfcJYsD7EiiGHKvVgxJ7YGi8LNC4iJzXll-ljA',
                'Content-Type' : 'multipart/form-data'
            },
            data: {
                organizationName, 
                username, 
                email, 
                phoneNumber, 
                photo
            }
        })
            .then(res => {
                dispatch({
                type: EDIT_PROFILE,
                organizationName: res.data.data.organizationName,
                photo: res.data.data.photo,
                confirmed: res.data.data.confirmed,
                username: res.data.data.username,
                email: res.data.data.email,
                phoneNumber: res.data.data.phoneNumber
                })
              }
            )
            .catch(err => console.log(err))
    }
}

<<<<<<< HEAD
export const signup = (organizationName, username, phoneNumber, email, password) => {
    return dispatch => {
      axios
        .post("https://relaonebinar.herokuapp.com/api/organization/signup", {
          organizationName,
          username,
          phoneNumber,
          email,
          password
        })
        .then(res => {
          console.log(res);
          dispatch({
            type: SIGN_UP,
            organizationName,
            username,
            phoneNumber,
            email,
            password
          });
        }) 
        .catch(err => {
          console.log(err.response);
        });
    };
  };
=======
export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0OTUyODU4LCJleHAiOjE1NTU1NTc2NTh9.hjnTlrfcJYsD7EiiGHKvVgxJ7YGi8LNC4iJzXll-ljA"}
        })
        .then(res => {
            dispatch ({
                type: GET_ARTICLE,
                payload: res.data.data
            })
        })
    }
}



>>>>>>> 1ba1d3a25f4cf8079c92df70de70b9f4f8ff5e66
