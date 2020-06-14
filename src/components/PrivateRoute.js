import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={(props) => (
      isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
);
