import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends React.Component {
  render() {
    return this.props.auth ?
      <div>This is the profile page.</div> :
      <Redirect to="/login" />
  }
}

export default connect(state => ({ auth: state }))(Profile);