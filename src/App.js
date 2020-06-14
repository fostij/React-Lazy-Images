import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.css';

import PrivatRoute from './components/PrivateRoute';
import Header from "./components/Header";
import Login from "./containers/login/Login";
import Gallery from "./containers/gallery/Gallery";

class App extends Component {
    render() {
        const { auth } = this.props;

        return (
            <div className="container">
                <Header />
                <PrivatRoute exact path="/" component={Gallery} isLoggedIn={auth.isLoggedIn} />
                <Route exact path="/login" component={Login} />
            </div>
        );
    }
}

export default connect(
    state => ({
        auth: state.auth
    })
)(App);
