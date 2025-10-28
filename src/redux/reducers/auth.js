/* eslint-disable prettier/prettier */
const initialState = {
    isLogin: false,
    token: '',
    isLoading: false,
    isError: false,
    alertMsg: '',
    isSucces: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_PENDING': {
        return {
          ...state,
          isLoading: true,
          isError: false,
          alertMsg: 'Login ...',
        };
      }
      case 'LOGIN_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          isLogin: true,
          isError: false,
          alertMsg: 'Login success',
          token: action.payload.data.token,
        };
      }
      case 'LOGIN_REJECTED': {
        return {
          ...state,
          isLogin: false,
          isLoading: false,
          isError: true,
          alertMsg: 'Wrong email or password',
        };
      }
      case 'SIGNUP_PENDING': {
        return {
          ...state,
          isLoading: true,
          isError: false,
          alertMsg: 'Signup ...',
        };
      }
      case 'SIGNUP_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSucces: true,
          alertMsg: 'Signup success',
          data: action.payload.data,
        };
      }
      case 'SIGNUP_REJECTED': {
        return {
          ...state,
          isLogin: false,
          isLoading: false,
          isError: true,
          alertMsg: 'Register failed',
        };
      }
      case 'LOGOUT': {
        return {
          ...state,
          isLogin: false,
          // token: '', jangan di uncomment
          alertMsg: 'Logout success',
          data: {},
        };
      }
      case 'CLEAR': {
        return {
          ...state,
          isError: false,
          alertMsg: '',
          isLoading: false,
        };
      }
      default: {
        return state;
      }
    }
  };