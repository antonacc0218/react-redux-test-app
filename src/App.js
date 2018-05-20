import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NewsContainer from './containers/NewsContainer';
import ProfileContainer from './containers/ProfileContainer';
import LoginContainer from './containers/LoginContainer';
import Home from './components/Home';
import PrivateRoute from './containers/PrivateRoute';
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
            <Route path="/news" component={NewsContainer} />
            <Route path="/login" component={LoginContainer} />
            <PrivateRoute path="/profile" component={ProfileContainer} />
          </Switch>
          <LoginButton />
        </article>
      </div>
    );
  }
}

export default App;
