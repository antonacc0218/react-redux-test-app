import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/auth';

const LoginButton = ({ isAuthorized, onClick }) => {
  if (isAuthorized)
    return (
      <button onClick={onClick}>Log out</button>
    );
  else
    return null;
}

const mapStateToProps = state => ({ isAuthorized: state.session.userId });

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(logOut())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);