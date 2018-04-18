import React from 'react';
import { withRouter } from 'react-router-dom';
import { addAuth } from './actions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.login.current.value === 'Admin' && this.password.current.value === '12345') {
      this.props.dispatch(addAuth());
      this.props.history.push("/profile");
    }
    else {
      alert('Invalid credentials!');
    }
  }

  render() {
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

export default (withRouter(connect()(LoginForm)));