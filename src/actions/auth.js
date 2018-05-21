import { credentialsAreValid } from '../helpers/auth';

export const logIn = ({ email, password }, cb, cbErr) => {
  return dispatch => {
    credentialsAreValid(email, password)
      .then(userId => {
        dispatch({
          type: 'LOG_IN',
          userId
        });
        cb();
        localStorage.setItem('session', userId);
      }
    )
    .catch(err => {
      dispatch({
        type: 'LOG_IN_ERROR',
        error: err.message
      });
      cbErr();
    });
  }; 
}

export const logOut = () => {
  localStorage.removeItem('session');
  return {
    type: 'LOG_OUT'
  };
}