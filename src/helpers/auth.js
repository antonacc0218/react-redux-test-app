export const getAuthorizedUser = () => {
  const userName = localStorage.getItem('session');
  const user = userName ? { name: userName } : null;
  return {
    user,
    error: ''
  };
}

export const credentialsAreValid = (login, password) => {
  return login === 'Admin' && password === '12345';
}
