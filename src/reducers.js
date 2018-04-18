export const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'ADD_AUTH':
      return action.auth;
    case 'REMOVE_AUTH':
      return action.auth;
    default:
      return state;
  }
}