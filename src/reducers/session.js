const initialState = {
  user: null,
  error: ''
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: action.user,
        error: ''
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: null,
        error: ''
      };
    case 'LOG_IN_ERROR':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default session;