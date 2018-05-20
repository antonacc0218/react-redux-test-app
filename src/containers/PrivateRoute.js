import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuthorized ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({ isAuthorized: state.session.userId });

export default connect(mapStateToProps)(PrivateRoute);