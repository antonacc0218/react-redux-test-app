import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import News from './components/News';
import Profile from './components/Profile';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import LoginButton from './components/LoginButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <article>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
          <LoginButton />
        </article>
      </div>
    );
  }
}

export default App;
