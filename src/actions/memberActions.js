import axios from 'axios';
import { GET_ARTICLE, GET_USEREVENT, GET_PROFILE, SIGN_UP } from './type';

export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/member/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTE2NzQ1MWJlODZkNjlhY2Q2MTg4NSIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYWhheWRlQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiaW5kcmEiLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNTU0NTI4NDA5LCJleHAiOjE1NTUxMzMyMDl9.FshP-mBV_f_qbo1o9AVqKWozylluYTvNzDwHWJ1EVQ0"}
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
          headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yZWxhb25lL2ltYWdlL3VwbG9hZC92MTU1NDc3NDA4OS9NZW1iZXIvNWNhYmY3Yzc0OGEzODQxNDBmZjE0YWRiLmpwZyIsInNraWxsU2V0IjpbIjVjYTQ2YmJmZjJkM2Y5MTY5MWZlZjViOCIsIjVjYTQ2YmU4ZjJkM2Y5MTY5MWZlZjViYSJdLCJpYXQiOjE1NTQ3OTQ0OTQsImV4cCI6MTU1NTM5OTI5NH0.2qZlDgAf_LIlqfkIsTWfZzUYc1RACu7j5ppdN0Jzp6o"}
      })
      .then(res => {
          dispatch ({
              type: GET_USEREVENT,
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
        console.log(err.response);
      });
  };
};

export const getProfile = () => {
  return dispatch => {
      axios.get('https://relaonebinar.herokuapp.com/api/member/profile',
      {
          headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVjMTE2M2IwNTE1MDAxNzgxMzEyYiIsInVzZXJuYW1lIjoicmF5bW9uZGxlb25zIiwiZW1haWwiOiJyYXltb25kbGVvbnMxOTk3QGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiUmF5bW9uZCBMZW9uIFNlbWJpcmluZyIsInJvbGUiOiJtZW1iZXIiLCJwaG90byI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JlbGFvbmUvaW1hZ2UvdXBsb2FkL3YxNTU0NjMzNzA3L0RlZmF1bHQvZGVmYXVsdC1hdmF0YXIuanBnIiwic2tpbGxTZXQiOltdLCJpYXQiOjE1NTQ2NjAxNzAsImV4cCI6MTU1NTI2NDk3MH0.Lg2kY365iVWtvoL9BGrtLX0XOJ16IROOnf62u30WsCc"}
      })
      .then(res => {
          dispatch ({
              type: GET_PROFILE,
              fullname: res.data.data.fullname,
              photo: res.data.data.photo,
              confirmed: res.data.data.confirmed,
              email: res.data.data.email,
              password: res.data.data.password,
              username: res.data.data.username,
              phoneNumber: res.data.data.phoneNumber,
              address: res.data.data.address,
              idCard: res.data.data.idCard

          })
      })
  }
}

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
        console.log(err.response);
      });
  };
};
