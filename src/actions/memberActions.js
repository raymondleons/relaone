import axios from 'axios';
import { GET_ARTICLE, GET_USEREVENT, SIGN_UP, GET_USERJOINEDEVENT, GET_USERPROFILE, EDIT_USERPROFILE, SEARCH_ARTICLE, EDIT_USERPHOTO} from './type';

export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/member/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yZWxhb25lL2ltYWdlL3VwbG9hZC92MTU1NTMxMzYzMi9NZW1iZXIvNWNhYmY3Yzc0OGEzODQxNDBmZjE0YWRiLmpwZyIsInNraWxsU2V0IjpbIjVjYTQ2YmJmZjJkM2Y5MTY5MWZlZjViOCIsIjVjYTQ2YmU4ZjJkM2Y5MTY5MWZlZjViYSJdLCJpYXQiOjE1NTU0MDA1MzcsImV4cCI6MTU1NjAwNTMzN30.eIL-ZKAH2YpIJ4P3dsrunq2JgkmynhPo7BuDW2ENtKM"}
        })
        .then(res => {
              dispatch ({
                  type: GET_ARTICLE,
                  payload: res.data.data
              })
    })
}
}

export const getEvent = () => {
  return dispatch => {
      axios.get('https://relaonebinar.herokuapp.com/api/member/event',
      {
          headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yZWxhb25lL2ltYWdlL3VwbG9hZC92MTU1NTMxMzYzMi9NZW1iZXIvNWNhYmY3Yzc0OGEzODQxNDBmZjE0YWRiLmpwZyIsInNraWxsU2V0IjpbIjVjYTQ2YmJmZjJkM2Y5MTY5MWZlZjViOCIsIjVjYTQ2YmU4ZjJkM2Y5MTY5MWZlZjViYSJdLCJpYXQiOjE1NTU0MDA1MzcsImV4cCI6MTU1NjAwNTMzN30.eIL-ZKAH2YpIJ4P3dsrunq2JgkmynhPo7BuDW2ENtKM"}
      })
      .then(res => {
          dispatch ({
              type: GET_USEREVENT,
              payload: res.data.data
          })
      })
  }
}

export const getUserJoinedEvent = () => {
  return dispatch => {
      axios.get('https://relaonebinar.herokuapp.com/api/member/joinedevent',
      {
          headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yZWxhb25lL2ltYWdlL3VwbG9hZC92MTU1NTMxMzYzMi9NZW1iZXIvNWNhYmY3Yzc0OGEzODQxNDBmZjE0YWRiLmpwZyIsInNraWxsU2V0IjpbIjVjYTQ2YmJmZjJkM2Y5MTY5MWZlZjViOCIsIjVjYTQ2YmU4ZjJkM2Y5MTY5MWZlZjViYSJdLCJpYXQiOjE1NTU0MDA1MzcsImV4cCI6MTU1NjAwNTMzN30.eIL-ZKAH2YpIJ4P3dsrunq2JgkmynhPo7BuDW2ENtKM"}
      })
      .then(res => {
          dispatch ({
              type: GET_USERJOINEDEVENT,
              payload: res.data.data
          })
      })
  }
}


export const signIn = (username, password) => {
  return dispatch => {
    axios
      .post("https://relaonebinar.herokuapp.com/api/member/login", {
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
        headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yZWxhb25lL2ltYWdlL3VwbG9hZC92MTU1NTMxMzYzMi9NZW1iZXIvNWNhYmY3Yzc0OGEzODQxNDBmZjE0YWRiLmpwZyIsInNraWxsU2V0IjpbIjVjYTQ2YmJmZjJkM2Y5MTY5MWZlZjViOCIsIjVjYTQ2YmU4ZjJkM2Y5MTY5MWZlZjViYSJdLCJpYXQiOjE1NTU0MDA1MzcsImV4cCI6MTU1NjAwNTMzN30.eIL-ZKAH2YpIJ4P3dsrunq2JgkmynhPo7BuDW2ENtKM"}
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
          bio : res.data.data.bio
          })
      })
  }
}

export const editUserProfile = (fullname, username, email, idCard, birthDate, address, phoneNumber, bio, skillSet, emergencyContact) => {
  return dispatch => {
      axios ({
          url: 'https://relaonebinar.herokuapp.com/api/member/profile',
          method: 'put',
          headers: { 
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yZWxhb25lL2ltYWdlL3VwbG9hZC92MTU1NTMxMzYzMi9NZW1iZXIvNWNhYmY3Yzc0OGEzODQxNDBmZjE0YWRiLmpwZyIsInNraWxsU2V0IjpbIjVjYTQ2YmJmZjJkM2Y5MTY5MWZlZjViOCIsIjVjYTQ2YmU4ZjJkM2Y5MTY5MWZlZjViYSJdLCJpYXQiOjE1NTU0MDA1MzcsImV4cCI6MTU1NjAwNTMzN30.eIL-ZKAH2YpIJ4P3dsrunq2JgkmynhPo7BuDW2ENtKM'
          },
          data: {
            fullname, 
            username, 
            email, 
            idCard, 
            birthDate,
            address, 
            phoneNumber, 
            bio,
            skillSet,
            emergencyContact
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
              emergencyContact:res.data.data.emergencyContact,
              skillSet : res.data.data.skillSet,
              })
            }
          )
          .catch(err => 
            console.log(err))
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

export const editUserPhoto = (formdata) => {
  return dispatch => {
      axios ({
          url: 'https://relaonebinar.herokuapp.com/api/member/uploadphoto',
          method: 'put',
          headers: { 
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yZWxhb25lL2ltYWdlL3VwbG9hZC92MTU1NTMxMzYzMi9NZW1iZXIvNWNhYmY3Yzc0OGEzODQxNDBmZjE0YWRiLmpwZyIsInNraWxsU2V0IjpbIjVjYTQ2YmJmZjJkM2Y5MTY5MWZlZjViOCIsIjVjYTQ2YmU4ZjJkM2Y5MTY5MWZlZjViYSJdLCJpYXQiOjE1NTU0MDA1MzcsImV4cCI6MTU1NjAwNTMzN30.eIL-ZKAH2YpIJ4P3dsrunq2JgkmynhPo7BuDW2ENtKM'
          },
          data: formdata
      })
          .then(res => {
              dispatch({
              type: EDIT_USERPHOTO,
              photo: res.data.data.photo
              })
            }
          )
          .catch(err => console.log(err))
  }
}