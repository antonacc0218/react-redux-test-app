import React from 'react';
import { Redirect } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      redirectToReferrer: false,
      isLoading: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({ isLoading: true });
    this.props.logIn(
      {
        email: this.email.current.value,
        password: this.password.current.value
      },
      () => {
        this.setState({ redirectToReferrer: true });
      },
      () => {
        this.password.current.value = '';
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />
    }
    else {
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
            <input type="submit" value={this.state.isLoading ? "Loading..." : "Submit"} disabled={this.state.isLoading} />
          </form>
        </div>
      );
    }
  }
}

export default Login;
