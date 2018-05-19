import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeAuth } from '../actions/auth';

const LoginButton = ({ history, dispatch, auth }) => {
  if (auth)
    return (
      <button onClick={() => {
        dispatch(removeAuth());
        history.push("/");
      }}>Log out</button>
    );
  else
    return null;
}

const mapStateToProps = state => ({ auth: state.auth });

export default withRouter(connect(mapStateToProps)(LoginButton));