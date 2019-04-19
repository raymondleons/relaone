import axios from 'axios';
import { ADD_EVENT, GET_SKILLSET, GET_EVENT, GET_PROFILE, DEL_EVENT, EDIT_PROFILE, GET_ARTICLE, EDIT_PROFILE_PHOTO, EDIT_EVENT_PHOTO, SEARCH_ARTICLE, EDIT_EVENT } from './type';

export const getSkillset = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/skillset',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQm9jYWggTWVvbmciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1MjIyODcwLCJleHAiOjE1NTU4Mjc2NzB9.ik4ptth05V46kFJJp6I07O9afKzbpb0GkrFtD0i_-II"}
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
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFJldHVybiBvZiBDbGF3Iiwicm9sZSI6Im9yZ2FuaXphdGlvbiIsImlhdCI6MTU1NTIxMTIxNCwiZXhwIjoxNTU1ODE2MDE0fQ.uoIvYKEMY071oHg46fgePS6UDKVM-wUPMSpP1t-t9hw"}
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
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQm9jYWggTWVvbmciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1MjIyODcwLCJleHAiOjE1NTU4Mjc2NzB9.ik4ptth05V46kFJJp6I07O9afKzbpb0GkrFtD0i_-II'
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
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQm9jYWggTWVvbmciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1MjIyODcwLCJleHAiOjE1NTU4Mjc2NzB9.ik4ptth05V46kFJJp6I07O9afKzbpb0GkrFtD0i_-II'
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
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSIsInJvbGUiOiJvcmdhbml6YXRpb24iLCJpYXQiOjE1NTU2NDkzMDksImV4cCI6MTU1NjI1NDEwOX0.Xn2tGmavbBl7iagh7PP0ow0Sqxj99R5jevF5u66WvLU',
                'Content-Type': 'application/json'
            },
            data: {
                _id,
                title,
                description,
                location,
                quotaMax,
                skillSet,
                deadline
            }
        })
            .then(res => {
                console.log(res)
                dispatch({
                type: EDIT_EVENT,
                title : res.data.data.title,
                description : res.data.data.description,
                location : res.data.data.location,
                quotaMax : res.data.data.quotaMax,
                skillSet : res.data.data.skillSet,
                deadline : res.data.data.deadline
                })
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
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0OTUyODU4LCJleHAiOjE1NTU1NTc2NTh9.hjnTlrfcJYsD7EiiGHKvVgxJ7YGi8LNC4iJzXll-ljA'
            },
            data: formdata
        })
            .then(res => {
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
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQm9jYWggTWVvbmciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1MjIyODcwLCJleHAiOjE1NTU4Mjc2NzB9.ik4ptth05V46kFJJp6I07O9afKzbpb0GkrFtD0i_-II"}
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
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1NjQ2MjE0LCJleHAiOjE1NTYyNTEwMTR9.2-XYwETiKd8_Rbu-_MPoHoWFIbKADWSfmfcxbeJ-2ME'
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
                })
              }
            )
            .catch(err => console.log(err))
    }
}

export const editPhoto = (formdata) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/uploadphoto',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0OTUyODU4LCJleHAiOjE1NTU1NTc2NTh9.hjnTlrfcJYsD7EiiGHKvVgxJ7YGi8LNC4iJzXll-ljA'
            },
            data: formdata
        })
            .then(res => {
                dispatch({
                type: EDIT_PROFILE_PHOTO,
                photo: res.data.data.photo
                })
              }
            )
            .catch(err => console.log(err))
    }
}

export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1NTU4NTk4LCJleHAiOjE1NTYxNjMzOTh9.v_JCKy-ygT8kI6zFVv9kc5cBEz1lMrJRmuaegQSXw4M"}
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
        axios.get(`https://relaonebinar.herokuapp.com/api/member/searcharticle?search=${keyword}`,
        {
          headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjpudWxsLCJza2lsbFNldCI6WyI1Y2E0NmJiZmYyZDNmOTE2OTFmZWY1YjgiLCI1Y2E0NmJlOGYyZDNmOTE2OTFmZWY1YmEiXSwiaWF0IjoxNTU1MjE5Mzc3LCJleHAiOjE1NTU4MjQxNzd9.G6I633dPc81z5bw799nz25vEdqcpu3nSYKNqpd2ZUKA"}          
        })
        .then(res => {
          if (res.data.message === "Article Not Found") {
            console.log('not found');
            dispatch ({
              type: SEARCH_ARTICLE,
              payload: []
            })
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


