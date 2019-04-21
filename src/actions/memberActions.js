import axios from 'axios';
import { GET_ARTICLE, GET_PROFILE, SEARCH_ARTICLE } from './type';

const url = "https://relaonebinar.herokuapp.com/api";

export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/member/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjpudWxsLCJza2lsbFNldCI6WyI1Y2E0NmJiZmYyZDNmOTE2OTFmZWY1YjgiLCI1Y2E0NmJlOGYyZDNmOTE2OTFmZWY1YmEiXSwiaWF0IjoxNTU1MjE5Mzc3LCJleHAiOjE1NTU4MjQxNzd9.G6I633dPc81z5bw799nz25vEdqcpu3nSYKNqpd2ZUKA"}
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
      .post(`${url}/member/login`, {
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
          headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjpudWxsLCJza2lsbFNldCI6WyI1Y2E0NmJiZmYyZDNmOTE2OTFmZWY1YjgiLCI1Y2E0NmJlOGYyZDNmOTE2OTFmZWY1YmEiXSwiaWF0IjoxNTU1MjE5Mzc3LCJleHAiOjE1NTU4MjQxNzd9.G6I633dPc81z5bw799nz25vEdqcpu3nSYKNqpd2ZUKA"}
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

export const searchArticle = (keyword) => {
  return dispatch => {
      axios.get(`https://relaonebinar.herokuapp.com/api/member/searcharticle?search=${keyword}`,
      {
        headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWJmN2M3NDhhMzg0MTQwZmYxNGFkYiIsInVzZXJuYW1lIjoicmVnZWRpdCIsImVtYWlsIjoiYmlhc2FzYWphQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiSW5kcmEgVGFtdmFuIiwicm9sZSI6Im1lbWJlciIsInBob3RvIjpudWxsLCJza2lsbFNldCI6WyI1Y2E0NmJiZmYyZDNmOTE2OTFmZWY1YjgiLCI1Y2E0NmJlOGYyZDNmOTE2OTFmZWY1YmEiXSwiaWF0IjoxNTU1MjE5Mzc3LCJleHAiOjE1NTU4MjQxNzd9.G6I633dPc81z5bw799nz25vEdqcpu3nSYKNqpd2ZUKA"}          
      })
      .then(res => {
        if (res.data.message === "Article not found") {
          console.log('not found');
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




