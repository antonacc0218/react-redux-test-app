import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';
import News from './News';
import Profile from './Profile';
import Login from './Login';
import './App.css';
import { removeAuth } from './actions';
import { connect } from 'react-redux';

const LoginButton = withRouter(
  connect(state => ({ auth: state }))(({ history, dispatch, auth }) => {
    if (auth)
      return (
        <button onClick={() => {
          dispatch(removeAuth());
          history.push("/");
        }}>Log out</button>
      );
    else
      return null;
  })
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/profile">Profile</Link>
          </header>
          <article>
            <Route path="/" exact={true} render={() => (
              <div>Welcome to the app! Use the links above to navigate.</div>
            )} />
            <Route path="/news" component={News} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <LoginButton />
          </article>
        </div>
      </Router>
    );
  }
}

export default App;
