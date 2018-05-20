const initialState = {
  data: null,
  error: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_DATA':
      return {
        ...state,
        data: action.user,
        error: ''
      };
    case 'GET_USER_DATA_ERROR':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default user;