import React from 'react';
import { Redirect } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = { redirectToReferrer: false };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(
      {
        email: this.email.current.value,
        password: this.password.current.value
      },
      () => {
        this.setState({ redirectToReferrer: true });
      }
    );
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />
    }
    else {
      if (this.props.error)
        this.password.current.value = '';
      return (
        <div>
          <ErrorMsg text={this.props.error} />
          <form onSubmit={this.handleSubmit}>
            <label>
              E-mail:
              <input type="text" name="email" ref={this.email} />
            </label>
            <label>
              Password:
              <input type="password" name="password" ref={this.password} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
}

export default Login;
