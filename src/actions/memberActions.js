import axios from 'axios';
import { GET_ARTICLE } from './type';

export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/member/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTE2NzQ1MWJlODZkNjlhY2Q2MTg4NSIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYWhheWRlQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiaW5kcmEiLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNTU0NTI4NDA5LCJleHAiOjE1NTUxMzMyMDl9.FshP-mBV_f_qbo1o9AVqKWozylluYTvNzDwHWJ1EVQ0"}
        })
        .then(res => {
            console.log(res)
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

// export const signup = (name, username, email, password) => {
//   return {
//     type: "SIGN_UP",
//     name,
//     username,
//     email,
//     password
//   };
// };

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
