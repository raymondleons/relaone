import axios from 'axios';
import { ADD_EVENT, 
        GET_SKILLSET, 
        GET_EVENT, 
        GET_PROFILE, 
        DEL_EVENT, 
        EDIT_PROFILE, 
        GET_ARTICLE, 
        EDIT_PROFILE_PHOTO, 
        EDIT_EVENT_PHOTO, 
        SEARCH_ARTICLE, 
        EDIT_EVENT,
        GET_VOLUNTEER,
        SEARCH_VOLUNTEER,
        SIGN_IN_ORG,
        SIGN_UP } from './type';
import history from '../history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
        position: "top-center"}
)

const url = "https://relaonebinar.herokuapp.com/api";

export const signInOrganization = (username, password) => {
    return dispatch => {
        axios ({
            url: `${url}/organization/login`,
            method: 'post',
            data: {
                username,
                password
            }
        })
            .then(res => {
                dispatch({
                type: SIGN_IN_ORG,
                token: res.data.token
                });
                let message = res.data.message
                toast.success(message)
                history.push('/organization/event');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}

export const getSkillset = () => {
    return dispatch => {
        axios.get(`${url}/organization/skillset`,
        {
            headers: { "x-access-token": localStorage.getItem('token')}
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
        axios.get(`${url}/organization/event`,
        {
            headers: { "x-access-token": localStorage.getItem('token')}
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
            url: `${url}/organization/event`,
            method: 'post',
            headers: {
                'x-access-token': localStorage.getItem('token')
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
                toast.success("Your event is successfully created")
                history.push('/organization/event');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}

export const delEvent = (id) => {
    return dispatch => {
        axios({
            url: `${url}/organization/event`,
            method: 'delete',
            headers: {
                'x-access-token': localStorage.getItem('token')
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
                toast.success("Your event is successfully deleted")
            })
            .catch(err => console.log(err))
        }
    }


export const editEvent = (_id, title, description, location, quotaMax, skillSet, deadline) => {
    return dispatch => {
        console.log(_id, title, description, location, quotaMax, skillSet, deadline)
        axios ({
            url: `${url}/organization/event`,
            method: 'put',
            headers: { 
                'x-access-token': localStorage.getItem('token')
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
                toast.success("Your event has been updated")
                history.push('/organization/event');
                }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}
  
export const editEventPhoto = (formdata) => {
    return dispatch => {
        axios ({
            url: `${url}/organization/uploadphotoevent`,
            method: 'put',
            headers: { 
                'x-access-token': localStorage.getItem('token')
            },
            data: formdata
        })
            .then(res => {
                console.log(res)
                dispatch({
                type: EDIT_EVENT_PHOTO,
                photo: res.data.data.photo
                })
                toast.success("Your event has been updated")
                }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}

export const getProfile = () => {
    return dispatch => {
        axios.get(`${url}/organization/profile`,
        {
            headers: { "x-access-token": localStorage.getItem('token')}
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
            url: `${url}/organization/profile`,
            method: 'put',
            headers: { 
                'x-access-token': localStorage.getItem('token')
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
          history.push('/register/success')
        }) 
        .catch(err => {
          console.log(err.response);
        });
    };
  };
export const editPhoto = (formdata) => {
    return dispatch => {
        axios ({
            url: `${url}/organization/uploadphoto`,
            method: 'put',
            headers: { 
                'x-access-token': localStorage.getItem('token')
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
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}

export const getArticle = () => {
    return dispatch => {
        axios.get(`${url}/organization/article`,
        {
            headers: { "x-access-token": localStorage.getItem('token')}
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
        axios.get(`${url}/organization/searcharticle?search=${keyword}`,
        {
          headers: { "x-access-token": localStorage.getItem('token')}          
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

  export const getVolunteer = () => {
    return dispatch => {
        axios.get(`${url}/organization/showallmember`,
        {
            headers: { "x-access-token": localStorage.getItem('token')}
        })
        .then(res => {
            dispatch ({
                type: GET_VOLUNTEER,
                payload: res.data.data
            })
        })
    }
}

export const searchVolunteer = (keyword) => {
    return dispatch => {
        axios.get(`${url}/organization/searchmember?search=${keyword}`,
        {
          headers: { "x-access-token": localStorage.getItem('token')}          
        })
        .then(res => {
          if (res.data.message === "Article not found") {
            console.log('not found');
            toast.warn(res.data.message)
          } else {
            dispatch ({
                type: SEARCH_VOLUNTEER,
                payload: res.data.data
            })
          }
        })
        .catch(err => console.log(err))
    }
  }


export const signIn = (username, password) => {
    return dispatch => {
      axios
        .post(`${url}/organization/login`, {
          username: username,
          password: password
        })
        .then(res => {
          console.log(res);
          dispatch({
            type: "SIGN_IN",
            username,
            password,
            response: res.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    };
  };