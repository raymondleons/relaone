import axios from 'axios';
import { ADD_EVENT, GET_SKILLSET, GET_EVENT, GET_PROFILE, DEL_EVENT, EDIT_PROFILE, GET_ARTICLE, EDIT_PROFILE_PHOTO, EDIT_EVENT_PHOTO, SEARCH_ARTICLE, EDIT_EVENT } from './type';
import history from '../history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
        position: "top-center"}
)

export const getSkillset = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/skillset',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y"}
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
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y"}
        })
        .then(res => {
            dispatch ({
                type: GET_EVENT,
                payload: res.data.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const addEvent = (title, description, deadline, location, quotaMax, skillSet) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/event',
            method: 'post',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y'
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
                type: ADD_EVENT,
                payload: res.data.data
                });
                history.push('/event');
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
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y'
            },
            data: {
                id
            }
            })
            .then(res => {
                console.log(res)
                dispatch ({
                    type: DEL_EVENT,
                    id
                })
            })
            .catch(err => console.log(err))
        }
    }


export const editEvent = (_id, title, description, location, quotaMax, skillSet, deadline) => {
    return dispatch => {
        console.log(_id, title, description, location, quotaMax, skillSet, deadline)
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/event',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y'
            },
            data: {
                "id": _id,
                "title": title,
                "description": description,
                "deadline": deadline,
                "location": location,
                "quotaMax": quotaMax,
                "skillSet": skillSet
            }
        })
            .then(res => {
                console.log(res.data.data)
                dispatch({
                type: EDIT_EVENT
                });
                history.push('/event');
                }
            )
            .catch(err => console.log(err))
    }
}
  
export const editEventPhoto = (formdata) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/uploadphotoevent',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y'
            },
            data: formdata
        })
            .then(res => {
                console.log(res)
                dispatch({
                type: EDIT_EVENT_PHOTO,
                photo: res.data.data.photo
                })
                }
            )
            .catch(err => console.log(err))
    }
}

export const getProfile = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/profile',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y"}
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

export const editProfile = (organizationName, username, email, phoneNumber) => {
    return dispatch => {
        console.log(organizationName, username, email, phoneNumber)
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/profile',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y'
            },
            data: {
                organizationName, 
                username, 
                email, 
                phoneNumber
            }
        })
            .then(res => {
                dispatch({
                type: EDIT_PROFILE,
                organizationName: res.data.data.organizationName,
                confirmed: res.data.data.confirmed,
                username: res.data.data.username,
                email: res.data.data.email,
                phoneNumber: res.data.data.phoneNumber
                });
                history.push('/organization/update-profile/success');
              }
            )
            .catch(err => {
                console.log(err)
                // console.log(err.data.message)
                toast.error("Error. Please check your input.")
            })
    }
}

export const editPhoto = (formdata) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/uploadphoto',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y'
            },
            data: formdata
        })
            .then(res => {
                console.log(res)
                dispatch({
                type: EDIT_PROFILE_PHOTO,
                photo: res.data.data.photo
                });
                history.push('/organization/update-profile/success');
              }
            )
            .catch(err => console.log(err))
    }
}

export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y"}
        })
        .then(res => {
            dispatch ({
                type: GET_ARTICLE,
                payload: res.data.data
            })
        })
    }
}

export const searchArticle = (keyword) => {
    return dispatch => {
        axios.get(`https://relaonebinar.herokuapp.com/api/organization/searcharticle?search=${keyword}`,
        {
          headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODI5NTQwLCJleHAiOjE1NTY0MzQzNDB9.iRYPQuq2SdKqdCLGqwXj1qSUT2B5f74S5YlXtIv02_Y"}          
        })
        .then(res => {
          if (res.data.message === "Article not found") {
            console.log('not found');
            toast.warn(res.data.message)
          } else {
            dispatch ({
                type: SEARCH_ARTICLE,
                payload: res.data.data
            })
          }
        })
        .catch(err => console.log(err))
    }
  }


