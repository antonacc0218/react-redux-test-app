import { credentialsAreValid } from '../helpers/session';

export const logIn = ({ email, password }) => {
  return (dispatch, getState) => {
    if (getState().session.isLoading)
      return;

    dispatch({ type: 'LOG_IN' });
    credentialsAreValid(email, password)
      .then(userId => {
        dispatch({
          type: 'LOG_IN_SUCCESS',
          userId
        });
        localStorage.setItem('session', userId);
      }
    )
    .catch(err => {
      dispatch({
        type: 'LOG_IN_ERROR',
        error: err.message
      });
    });
  }; 
}

export const logOut = () => {
  localStorage.removeItem('session');
  return {
    type: 'LOG_OUT'
  };
}