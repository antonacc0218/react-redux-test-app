import { getAuthorizedUser } from '../helpers/auth';

const initialState = {
  userId: getAuthorizedUser(),
  error: ''
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        userId: action.userId,
        error: ''
      };
    case 'LOG_OUT':
      return {
        ...state,
        userId: null,
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