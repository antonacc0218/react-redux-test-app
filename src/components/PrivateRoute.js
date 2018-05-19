import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.auth ? (
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

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);