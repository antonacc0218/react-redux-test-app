import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
    this.state = { redirectToReferrer: false };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(
      {
        username: this.login.current.value,
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
      return (
        <div>
          {this.props.error && <p>{this.props.error}</p>}
          <form onSubmit={this.handleSubmit}>
            <label>
              Login:
              <input type="text" name="login" ref={this.login} />
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
