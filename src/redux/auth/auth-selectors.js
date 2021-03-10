const getIsAuthenticated = state => Boolean(state.auth.token);

const getUserEmail = state => state.auth.user.email;

export default {
  getIsAuthenticated,
  getUserEmail,
};