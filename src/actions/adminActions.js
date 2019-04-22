import axios from 'axios'
import {GET_USER} from './type'

export const getUser = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/admin/member',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
        .then(res => {
            dispatch ({
                type: GET_USER,
                payload: res.data.data
            })
        })
    }
}

export const signIn = (username, password) => {
    return dispatch => {
      axios
        .post("https://relaonebinar.herokuapp.com/api/admin/login", {
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
  