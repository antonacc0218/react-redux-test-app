import { credentialsAreValid } from '../helpers/auth';

export const logIn = ({ username, password }, cb) => {
  if (credentialsAreValid(username, password)) {
    localStorage.setItem('session', username);
    cb();
    return {
      type: 'LOG_IN',
      user: {
        name: username
      }
    };
  }
  else
    return {
      type: 'LOG_IN_ERROR',
      error: 'Invalid credentials!'
    };
}

export const logOut = () => {
  localStorage.removeItem('session');
  return {
    type: 'LOG_OUT'
  };
}