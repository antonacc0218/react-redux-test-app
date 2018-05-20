import axios from 'axios';

export const fetchUserData = (userId) => {
  return axios.get('https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/' + userId)
    .then(response => {
      const { data } = response;
      if (data.status === 'ok')
        return data.data;
      else if (data.status === 'err')
        throw new Error(data.message);
      else
        throw new Error('Unspecified error.');
    }
  );
}
