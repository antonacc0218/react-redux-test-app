import axios from 'axios';

const requestNews = () => {
  return {
    type: 'REQUEST_NEWS'
  };
}

const requestNewsError = (error) => {
  return {
    type: 'REQUEST_NEWS_ERROR',
    error
  };
}

const receiveNews = (items) => {
  return {
    type: 'RECEIVE_NEWS',
    items
  };
}

const fetchNews = () => {
  return dispatch => {
    dispatch(requestNews());
    return axios.get('https://mysterious-reef-29460.herokuapp.com/api/v1/news')
      .then(
        response => {
          const { data } = response;
          if (data.status === 'ok')
            dispatch(receiveNews(data.data));
          else if (data.status === 'err')
            throw new Error(data.message);
          else
            throw new Error('Unspecified error.');
        },
        error => dispatch(requestNewsError(error))
      );
  };
}

const shouldFetchNews = state => {
  if (state.news.isFetching || state.news.items.length)
    return false;
  else
    return true;
}

export const fetchNewsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchNews(getState()))
      return dispatch(fetchNews());
    else
      return Promise.resolve();
  };
}