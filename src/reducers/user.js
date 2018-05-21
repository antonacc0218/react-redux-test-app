const initialState = {
  data: null,
  isFetching: false,
  error: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case 'REQUEST_USER_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case 'RECEIVE_USER':
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: ''
      };
    default:
      return state;
  }
};

export default user;