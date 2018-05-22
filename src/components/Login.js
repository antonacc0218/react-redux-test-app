import React from 'react';
import { Redirect } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.logIn({
      email: this.email.current.value,
      password: this.password.current.value
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { loginSuccessful, error, isLoading } = this.props;

    if (loginSuccessful) {
      return <Redirect to={from} />
    }
    else {
      if (error)
        this.password.current.value = '';
      return (
        <div>
          <ErrorMsg text={error} />
          <form onSubmit={this.handleSubmit}>
            <label>
              E-mail:
              <input type="text" name="email" ref={this.email} />
            </label>
            <label>
              Password:
              <input type="password" name="password" ref={this.password} />
            </label>
            <input type="submit" value={isLoading ? "Loading..." : "Submit"} disabled={isLoading} />
          </form>
        </div>
      );
    }
  }
}

export default Login;
