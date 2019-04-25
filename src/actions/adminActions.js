import axios from 'axios'
import {
    ADD_USER,
    GET_USER, 
    DEL_USER, 
    GET_ARTICLE, 
    DEL_ARTICLE, 
    GET_ORGANIZATION, 
    DEL_ORGANIZATION,
    GET_EVENT,
    DEL_EVENT,
    GET_USER_TOTAL,
    GET_ARTICLE_TOTAL,
    GET_EVENT_TOTAL,
    GET_ORGANIZATION_TOTAL,
    GET_SKILLSET,
    DEL_SKILLSET,
    GET_USER_ADMIN,
    GET_PROFILE_ADMIN,
    SIGNIN_ADMIN,
    EDIT_PROFILE,
    GET_PROFILE,
    DEL_USER_ADMIN,
    ADD_ARTICLE,
    GET_USERSKILLSET,
    ADD_ORGANIZATION,
    ADD_SKILLSET,
    GET_USERPROFILE,
    EDIT_USERPROFILE,
    ADD_EVENT} from './type'
import history from '../history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
        position: "top-center"}
)

const url = "https://relaonebinar.herokuapp.com/api";

export const signInAdmin = (username, password) => {
    return dispatch => {
        axios ({
            url: `${url}/admin/login`,
            method: 'post',
            data: {
                username,
                password
            }
        })
            .then(res => {
                dispatch({
                type: SIGNIN_ADMIN,
                token: res.data.token,
                role: res.data.data.role
                });
                let message = res.data.message
                toast.success(message)
                history.push('/admin');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
  }

  export const getUserSkillset = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/admin/skillset',
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
  
  export const getUserProfile = () => {
  return dispatch => {
      axios.get(`${url}/admin/member`,
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

export const getUser = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/admin/member',
        {
          headers: { "x-access-token": localStorage.getItem('token')}
        })
        .then(res => {
            dispatch ({
                type: GET_USER,
                payload: res.data.data
            })
        })
    }
}

export const getProfile = () => {
  return dispatch => {
      axios.get(`${url}/admin/member`,
      {
          headers: { "x-access-token": localStorage.getItem('token')}
      })
      .then(res => {
          dispatch ({
              type: GET_PROFILE,
              fullname: res.data.data.fullname,
              idCard: res.data.data.idCard,
              username: res.data.data.username,
              email: res.data.data.email,
              phoneNumber: res.data.data.phoneNumber,
              address: res.data.data.address,
              bio: res.data.data.bio
          })
      })
  }
}

export const editProfileUser = (fullname, username, email, idCard, phoneNumber, address, bio) => {
    return dispatch => {
        console.log(fullname, username, email, idCard, phoneNumber, address, bio)
        axios ({
            url: `${url}/admin/member`,
            method: 'put',
            headers: { "x-access-token": localStorage.getItem('token')
            },
            data: {
                fullname,
                username,
                email,
                idCard,
                phoneNumber,
                address,
                bio
            }
        })
            .then(res => {
                dispatch({
                type: EDIT_PROFILE,
                fullname: res.data.data.fullname,
                idCard: res.data.data.idCard,
                username: res.data.data.username,
                email: res.data.data.email,
                phoneNumber: res.data.data.phoneNumber,
                address: res.data.data.address,
                bio: res.data.data.bio
                });
                history.push('/admin/users');
              }
            )
            .catch(err => {
                console.log(err)
                // console.log(err.data.message)
                toast.error("Error. Please check your input.")
            })
    }
  }
  
  export const getUserAdmin = () => {
    return dispatch => {
      axios({
        method: "get",
        url:`${url}/admin/`,
        headers: { "x-access-token": localStorage.getItem('token')}
          })
        .then(res => {
          console.log(res)
          dispatch({
            type: GET_USER_ADMIN,
            payload: res.data.data
          });
        })
        .catch(err => console.log(err.response));
    };
  };

export const delUserAdmin = (id) => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/admin/`,
      headers: { "x-access-token": localStorage.getItem('token')},
      data: {
        id
    }
    })
    .then(res => {
      console.log(res)
      dispatch ({
          type: DEL_USER_ADMIN,
          id
      })
  })
  .catch(err => console.log(err))
  };
};
  
  export const getProfileAdmin = () => {
    return dispatch => {
        axios.get(`${url}/admin/`,
        {
            headers: { "x-access-token": localStorage.getItem('token')}
        })
        .then(res => {
            dispatch ({
                type: GET_PROFILE_ADMIN,
                name: res.data.data.name,
            })
        })
    }
  }

  
  
  export const getUserTotal = () => {
    return dispatch => {
      axios({
        method: "get",
        url:`${url}/admin/member/`,
        headers: { "x-access-token": localStorage.getItem('token')}
          })
        .then(res => {
          console.log(res)
          dispatch({
            type: GET_USER_TOTAL,
            payload: res.data.data
          });
        })
        .catch(err => console.log(err.response));
    };
  };
  
  export const delUser = (id) => {
    return dispatch => {
      axios({
        method: "delete",
        url: `${url}/admin/member/`,
        headers: { "x-access-token": localStorage.getItem('token')},
        data: {
          id
      }
      })
      .then(res => {
        console.log(res)
        dispatch ({
            type: DEL_USER,
            id
        })
    })
    .catch(err => console.log(err))
    };
  };
  
  export const getArticle = () => {
    return dispatch => {
        axios.get(`${url}/admin/article`,
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

export const addArticle = (title, description, deadline, location, quotaMax, skillSet) => {
  return dispatch => {
      axios ({
          url: `${url}/admin/article`,
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
              type: ADD_ARTICLE,
              payload: res.data.data
              });
              toast.success("Your event is successfully created")
              history.push('/admin/article');
            }
          )
          .catch(err => {
              console.log(err)
              toast.error("Error. Please check your input.")
          })
  }
}
  
export const delArticle = (id) => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/admin/article/`,
      headers: { "x-access-token": localStorage.getItem('token')},
      data: {
        id
    }
    })
    .then(res => {
      console.log(res)
      dispatch ({
          type: DEL_ARTICLE,
          id
      })
  })
  .catch(err => console.log(err))
  };
};
  
  export const getOrganization = () => {
    return dispatch => {
      axios({
        method: "get",
        url:`${url}/admin/organization/`,
        headers: { "x-access-token": localStorage.getItem('token')}
          })
        .then(res => {
          console.log(res)
          dispatch({
            type: GET_ORGANIZATION,
            payload: res.data.data
          });
        })
        .catch(err => console.log(err.response));
    };
  };
  export const getOrganizationTotal = () => {
    return dispatch => {
      axios({
        method: "get",
        url:`${url}/admin/organization/`,
        headers: { "x-access-token": localStorage.getItem('token')}
          })
        .then(res => {
          console.log(res)
          dispatch({
            type: GET_ORGANIZATION_TOTAL,
            payload: res.data.data
          });
        })
        .catch(err => console.log(err.response));
    };
  };
  
  export const delOrganization = (id) => {
    return dispatch => {
      axios({
        method: "delete",
        url: `${url}/admin/organization/`,
        headers: { "x-access-token": localStorage.getItem('token')},
        data: {
          id
      }
      })
      .then(res => {
        console.log(res)
        dispatch ({
            type: DEL_ORGANIZATION,
            id
        })
    })
    .catch(err => console.log(err))
    };
  };
  
  
  export const getEvent = () => {
    return dispatch => {
      axios({
        method: "get",
        url:`${url}/admin/event/`,
        headers: { "x-access-token": localStorage.getItem('token')}
          })
        .then(res => {
          console.log(res)
          dispatch({
            type: GET_EVENT,
            payload: res.data.data
          });
        })
        .catch(err => console.log(err.response));
    };
  };
  
  export const getEventTotal = () => {
    return dispatch => {
      axios({
        method: "get",
        url:`${url}/admin/event/`,
        headers: { "x-access-token": localStorage.getItem('token')}
          })
        .then(res => {
          console.log(res)
          dispatch({
            type: GET_EVENT_TOTAL,
            payload: res.data.data
          });
        })
        .catch(err => console.log(err.response));
    };
  };
  
  export const delEvent = (id) => {
    return dispatch => {
      axios({
        method: "delete",
        url: `${url}/admin/event/`,
        headers: { "x-access-token": localStorage.getItem('token')},
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
    };
  };
  
  export const getArticleTotal = () => {
    return dispatch => {
      axios({
        method: "get",
        url:`${url}/admin/article/`,
        headers: { "x-access-token": localStorage.getItem('token')}
          })
        .then(res => {
          console.log(res)
          dispatch({
            type: GET_ARTICLE_TOTAL,
            payload: res.data.data
          });
        })
        .catch(err => console.log(err.response));
    };
  };
  
  export const getSkillSet = () => {
    return dispatch => {
      axios({
        method: "get",
        url:`${url}/admin/skillset/`,
        headers: { "x-access-token": localStorage.getItem('token')}
          })
        .then(res => {
          console.log(res)
          dispatch({
            type: GET_SKILLSET,
            payload: res.data.data
          });
        })
        .catch(err => console.log(err.response));
    };
  };
  
  export const delSkillSet = (id) => {
    return dispatch => {
      axios({
        method: "delete",
        url: `${url}/admin/skillset/`,
        headers: { "x-access-token": localStorage.getItem('token')},
        data: {
          id
      }
      })
      .then(res => {
        console.log(res)
        dispatch ({
            type: DEL_SKILLSET,
            id
        })
    })
    .catch(err => console.log(err))
    };
  };
  
  export const addUser = (fullname, username, password, email) => {
    return dispatch => {
        axios ({
            url: `${url}/admin/member`,
            method: 'post',
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
            data: {
                fullname,
                username,
                password,
                email
            }
        })
            .then(res => {
                dispatch({
                type: ADD_USER,
                payload: res.data.data
                });
                toast.success("Your event is successfully created")
                history.push('/admin/users');
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
        axios.get(`${url}/admin/skillset`,
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

  export const addOrganization = (organizationName, username, email, phoneNumber, password) => {
    return dispatch => {
        axios ({
            url: `${url}/admin/organization`,
            method: 'post',
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
            data: {
                organizationName,
                username,
                email,
                phoneNumber,
                password

            }
        })
            .then(res => {
                dispatch({
                type: ADD_ORGANIZATION,
                payload: res.data.data
                });
                toast.success("Your event is successfully created")
                history.push('/admin/organization');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
  }

  export const addEvent = (title, description, deadline, location, quotaMax, skillSet) => {
    return dispatch => {
        axios ({
            url: `${url}/admin/event`,
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
                history.push('/admin/event');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
  }

  export const addSkillSet = (name) => {
    return dispatch => {
        axios ({
            url: `${url}/admin/skillset`,
            method: 'post',
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
            data: {
                name

            }
        })
            .then(res => {
                dispatch({
                type: ADD_SKILLSET,
                payload: res.data.data
                });
                toast.success("Your event is successfully created")
                history.push('/admin/skill-sett');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
  }

  export const addAdmin = (name, username, email, password) => {
    return dispatch => {
        axios ({
            url: `${url}/admin`,
            method: 'post',
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
            data: {
                name,
                username,
                email,
                password
                

            }
        })
            .then(res => {
                dispatch({
                type: ADD_SKILLSET,
                payload: res.data.data
                });
                toast.success("Your event is successfully created")
                history.push('/admin/list-admin');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
  }

  export const editUserProfile = (fullname, username, email, idCard, birthDate, address, phoneNumber, bio, name, relationship, addr, phone, skillSet) => {
  return dispatch => {
    axios ({
          url: `${url}/admin/member`,
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
              let message = res.data.message
              toast.success(message)
              history.push('/user/update-profile/success');
            }
          )
          .catch(err => 
            console.log(err))
  }
}