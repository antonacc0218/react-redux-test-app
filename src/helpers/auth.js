import axios from 'axios';

export const getAuthorizedUser = () => {
  const userId = localStorage.getItem('session');
  return userId ? +userId : null;
}

export const credentialsAreValid = (email, password) => {
  return axios.post('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', { email, password })
    .then(response => {
      const { data } = response;
      if (data.status === 'ok')
        return data.data.id;
      else if (data.status === 'err')
        throw new Error(data.message);
      else
        throw new Error('Unspecified error.');
    }
  );
}
