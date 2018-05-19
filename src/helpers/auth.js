export const isAuthorized = () => {
  return localStorage.getItem('auth') === 'true';
}

export const credentialsAreValid = (login, password) => {
  return login === 'Admin' && password === '12345';
}
