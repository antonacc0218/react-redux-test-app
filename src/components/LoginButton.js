import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/session';

const LoginButton = ({ isAuthorized, dispatch }) => {
  if (isAuthorized)
    return (
      <button onClick={() => dispatch(logOut())}>Log out</button>
    );
  else
    return null;
}

const mapStateToProps = state => ({ isAuthorized: state.session.userId });

export default connect(mapStateToProps)(LoginButton);