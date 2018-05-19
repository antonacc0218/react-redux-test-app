export const addAuth = () => {
  localStorage.setItem('auth', 'true');
  return {
    type: 'ADD_AUTH',
    auth: true
  };
}

export const removeAuth = () => {
  localStorage.removeItem('auth');
  return {
    type: 'REMOVE_AUTH',
    auth: false
  };
}