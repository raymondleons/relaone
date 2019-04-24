import axios from 'axios';
import history from '../history';
import { toast } from 'react-toastify';
import { GET_ARTICLE,
  GET_USEREVENT,
  SIGN_UP,
  GET_USERJOINEDEVENT,
  GET_USERPROFILE,
  EDIT_USERPROFILE,
  SEARCH_ARTICLE,
  SEARCH_EVENT,
  EDIT_USERPHOTO,
  USER_JOINEVENT,
  USERSIGN_IN,
  GET_USERSKILLSET,
  USER_FORGOTPASSWORD} from './type';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
        position: "top-center"}
)
const url = "https://relaonebinar.herokuapp.com/api";


export const forgotPassword = (email) => {
  return dispatch => {
      axios ({
          url: `${url}/member/forgetpassword`,
          method: 'post',
          data: {
              email         
          }
      })
          .then(res => {
              console.log(res)
              // dispatch({
              // type: USER_FORGOTPASSWORD
              // });
              let message = "Please check your email"
              toast.success(message)
              history.push('/log-in');
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
        axios.get('https://relaonebinar.herokuapp.com/api/member/article',
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

export const getUserSkillset = () => {
  return dispatch => {
      axios.get('https://relaonebinar.herokuapp.com/api/member/skillset',
      {
          headers: { "x-access-token": localStorage.getItem('token')}
      })
      .then(res => {
          dispatch ({
              type: GET_USERSKILLSET,
              payload: res.data.data
          })
      })
  }
}

export const editUserProfile = (fullname, username, email, idCard, birthDate, address, phoneNumber, bio, name, relationship, addr, phone, skillSet) => {
  return dispatch => {
    // console.log(fullname, username, email, idCard, birthDate, address, phoneNumber, bio, emergencyContact, skillSet)
      axios ({
          url: 'https://relaonebinar.herokuapp.com/api/member/profile',
          method: 'put',
          headers: { 
              'x-access-token': localStorage.getItem('token')
          },
          data: {
            fullname : fullname,
            username : username,
            email : email, 
            idCard : idCard, 
            birthDate : birthDate,
            address : address, 
            phoneNumber : phoneNumber, 
            bio : bio,
            emergencyContact : {
              name : name,
              relationship : relationship,
              address : addr,
              phoneNumber : phone
            },
            skillSet : skillSet
          }
      })
          .then(res => {
            console.log(res)
              dispatch({
              type: EDIT_USERPROFILE,
              fullname : res.data.data.fullname,
              username : res.data.data.username,
              email : res.data.data.email,
              idCard : res.data.data.idCard,
              birthDate : res.data.data.birthDate,
              address : res.data.data.address,
              phoneNumber : res.data.data.phoneNumber,
              bio : res.data.data.bio,
              emergencyContact: res.data.data.emergencyContact,
              skillSet : res.data.data.skillSet
              })
              history.push('/user/update-profile/success');
            }
          )
          .catch(err => 
            console.log(err))
  }
}



export const getEvent = () => {
  return dispatch => {
      axios.get('https://relaonebinar.herokuapp.com/api/member/event',
      {
          headers: { "x-access-token": localStorage.getItem('token')}
      })
      .then(res => {
          dispatch ({
              type: GET_USEREVENT,
              payload: res.data.data
          })
      })
  }
}

export const joinEvent = (id) => {
  return dispatch => {
    axios ({
      url: 'https://relaonebinar.herokuapp.com/api/member/event',
      method: 'put',
      headers: { 
          'x-access-token': localStorage.getItem('token')
      },
      data: {
          "id" : id
      }
  })
    .then(res => {
      console.log(res)
      dispatch ({
          type: USER_JOINEVENT
      })
      history.push('/user/event');
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export const getUserJoinedEvent = () => {
  return dispatch => {
      axios.get('https://relaonebinar.herokuapp.com/api/member/joinedevent',
      {
          headers: { "x-access-token": localStorage.getItem('token')}
      })
      .then(res => {
        console.log(res)
          dispatch ({
              type: GET_USERJOINEDEVENT,
              payload: res.data.data
          })
      })
  }
}


export const signIn = (username, password) => {
  return dispatch => {
    axios ({
      url: `${url}/member/login`,
      method: 'post',
      data: {
          username,
          password
      }
    })
      .then(res => {
        dispatch({
          type: USERSIGN_IN,
          token: res.data.token,
          role: res.data.data.role
        });
        history.push('/user/dashboard');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const signup = (fullname, username, email, password) => {
  return dispatch => {
    axios
      .post("https://relaonebinar.herokuapp.com/api/member/signup", {
        fullname,
        username,
        email,
        password
      })
      .then(res => {
        console.log(res); 
        dispatch({
          type: SIGN_UP,
          fullname,
          username,
          email,
          password
        });
        history.push('/register/success');
      }) 
      .catch(err => {
        console.log(err);
      });
  };
};


export const getUserProfile = () => {
  return dispatch => {
      axios.get('https://relaonebinar.herokuapp.com/api/member/profile',
      {
        headers: { "x-access-token": localStorage.getItem('token')}
      })
      .then(res => {
          dispatch ({
          type: GET_USERPROFILE,
          photo : res.data.data.photo,
          fullname : res.data.data.fullname,
          username : res.data.data.username,
          email : res.data.data.email,
          idCard : res.data.data.idCard,
          birthDate : res.data.data.birthDate,
          address : res.data.data.address,
          phoneNumber : res.data.data.phoneNumber,
          bio : res.data.data.bio,
          emergencyContact: res.data.data.emergencyContact,
          skillSet: res.data.data.skillSet,
          id : res.data.data._id
          })
      })
  }
}

export const searchArticle = (keyword) => {
  return dispatch => {
      axios.get(`https://relaonebinar.herokuapp.com/api/member/searcharticle?search=${keyword}`,
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

export const editUserPhoto = (formdata) => {
  return dispatch => {
      axios ({
          url: 'https://relaonebinar.herokuapp.com/api/member/uploadphoto',
          method: 'put',
          headers: { 
              'x-access-token': localStorage.getItem('token')
          },
          data: formdata
      })
          .then(res => {
              dispatch({
              type: EDIT_USERPHOTO,
              photo: res.data.data.photo
              })
              history.push('/user/profile');
            }
          )
          .catch(err => console.log(err))
  }
}

export const searchEvent = (keyword) => {
  return dispatch => {
      axios.get(`https://relaonebinar.herokuapp.com/api/member/searchevent?search=${keyword}`,
      {
        headers: { "x-access-token": localStorage.getItem('token')}          
      })
      .then(res => {
        if (res.data.message === "Event Not Found") {
          console.log('not found');
        } else {
          dispatch ({
              type: SEARCH_EVENT,
              payload: res.data.data
          })
        }
      })
      .catch(err => console.log(err))
  }
}