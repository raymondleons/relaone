import axios from "axios";

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