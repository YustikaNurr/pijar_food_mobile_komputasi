/* eslint-disable prettier/prettier */
import {default as axios} from 'axios';

// import {API_URL} from '@env';

function http(token = null) {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
//   console.log(API_URL);
  return axios.create({
    baseURL: "http://localhost:8080",
    headers,
  });
}

export default http;