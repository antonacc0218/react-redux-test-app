import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return localStorage.getItem('auth') === 'true' ? 
      <Redirect to="/profile" /> : <LoginForm />
  }
}

export default Login;