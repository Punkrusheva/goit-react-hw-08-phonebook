import axios from 'axios';
import { unstable_concurrentAct } from 'react-dom/test-utils';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
        const response = await axios.post('/users/signup', credentials);

        token.set(response.data.token);
        dispatch(authActions.registerSuccess(response.data));
    } catch (error) {
        dispatch(authActions.registerError(error.massage));
    }
 };

const logIn = credentials => async dispatch => {
    dispatch(authActions.loginRequest());

    try {
        const response = await axios.post('/users/login', credentials);

        token.set(response.data.token);
        dispatch(authActions.loginSuccess(response.data));
    } catch (error) {
        dispatch(authActions.loginError(error.massage));
    }
 };

const logOut = () => async dispatch => {
       dispatch(authActions.logoutRequest());

    try {
        await axios.post('/users/logout');

        token.unset();
        dispatch(authActions.logoutSuccess());
    } catch (error) {
        dispatch(authActions.logoutError(error.massage));
    }
 };

const getCurrentUser = () => async (dispatch, getState) => {
const {
    auth: { token: persistedToken },
  } = getState();

    if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
      dispatch(authActions.getCurrentUserRequest());

    try {
        const response = await axios.get('/users/current');

       // dispatch(authActions.getCurrentUserSuccess());
    } catch (error) {
        dispatch(authActions.getCurrentUserError(error.massage));
    }
 };

export default {
    register,
    logIn,
    logOut,
    getCurrentUser,
};