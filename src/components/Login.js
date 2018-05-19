import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return this.props.auth ? 
      <Redirect to="/profile" /> : <LoginForm />
  }
}

export default connect(state => ({ auth: state.auth }))(Login);