import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return localStorage.getItem('auth') === 'true' ?
      <div>This is the profile page.</div> :
      <Redirect to="/login" />
  }
}

export default Profile;