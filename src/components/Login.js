import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { addAuth } from '../actions/auth';
import { connect } from 'react-redux';
import { credentialsAreValid } from '../helpers/auth'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
    this.state = { redirectToReferrer: false };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (credentialsAreValid(this.login.current.value, this.password.current.value)) {
      this.props.dispatch(addAuth());
      this.setState({ redirectToReferrer: true });
    }
    else {
      alert('Invalid credentials!');
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />
    }
    else {
      return (
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
      );
    }
  }
}

export default withRouter(connect()(Login));