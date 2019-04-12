import axios from 'axios';
import { GET_ARTICLE, GET_PROFILE } from './type';

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

const url = "https://relaonebinar.herokuapp.com";

export const signup = (fullname, username, email, password) => {
  return dispatch => {
    axios
      .post(`${url}/api/member/signup`, {
        fullname,
        username,
        email,
        password
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: "SIGN_UP",
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
