import { fetchUserData } from '../helpers/user';

export const getUserData = (userId) => {
  return dispatch => {
    fetchUserData(userId)
      .then(user => {
        dispatch({
          type: 'GET_USER_DATA',
          user
        });
      }
    )
    .catch(err => {
      dispatch({
        type: 'GET_USER_DATA_ERROR',
        error: err.message
      });
    });
  }; 
};