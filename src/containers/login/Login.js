import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { loginSuccess } from './actions';


class Login extends Component {
    responseFacebook = response => {
        const { loginSuccess } = this.props;
        // console.log(response);
        loginSuccess({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url

        });
    };

    componentClicked = () => {
        console.log('clicked');
    };

    render() {
        const { auth } = this.props;

        if(auth.isLoggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <FacebookLogin
                appId="305948653768733"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
        );
    }
}

export default connect(
    state => ({
        auth: state.auth
    }), {
        loginSuccess
    }
)(Login);