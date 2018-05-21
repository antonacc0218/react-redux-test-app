import axios from 'axios';

const requestUser = () => {
  return {
    type: 'REQUEST_USER'
  };
}

const requestUserError = error => {
  return {
    type: 'REQUEST_USER_ERROR',
    error
  };
}

const receiveUser = data => {
  return {
    type: 'RECEIVE_USER',
    data
  };
}

const fetchUser = () => {
  return (dispatch, getState) => {
    const { userId } = getState().session;
    dispatch(requestUser());
    return axios.get('https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/' + userId)
      .then(
        response => {
          const { data } = response;
          if (data.status === 'ok')
            dispatch(receiveUser(data.data));
          else if (data.status === 'err')
            throw new Error(data.message);
          else
            throw new Error('Unspecified error.');
        },
        error => dispatch(requestUserError(error))
      );
  };
}

const shouldFetchUser = state => {
  const { user } = state;
  if (user.isFetching) {
    return false;
  }
  else if (user.data) {
    if (user.data.userId === state.session.userId)
      return false;
    else
      return true;
  }
  else {
    return true;
  }
}

export const fetchUserIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchUser(getState()))
      return dispatch(fetchUser());
    else
      return Promise.resolve();
  };
}