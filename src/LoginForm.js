import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.login === 'Admin' && this.state.password === '12345') {
      localStorage.setItem('auth', 'true');
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
          <input type="text" name="login" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const RedirectLoginForm = withRouter(LoginForm);

export default RedirectLoginForm;