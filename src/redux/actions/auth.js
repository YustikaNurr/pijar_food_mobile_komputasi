/* eslint-disable prettier/prettier */
import http from '../../helpers/http';
import qs from 'querystring';
import firestore from '@react-native-firebase/firestore';


export default {
  doLogin: (email) => ({
    type: 'LOGIN',
    payload:   firestore()
    .collection('users')
    .where('email', '==', email)
    .get(),
  }),
  signup: (data, role) => ({
    type: 'SIGNUP',
    payload: http().post(`auth/register/${role}`, qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
  clear: () => ({
    type: 'CLEAR',
  }),
};