import React, { Component } from 'react';
import { withRouter } from 'react-router'
import NavBar from './NavBar'
import SignIn from './SignIn'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            signIn: false,
            signUp: false,
        };
    }

    onSignIn = () => {
        this.setState({logged: true, signIn: false, signUp: false})
    };

    onSignUp = () => {
        this.setState({logged: true, signIn: false, signUp: false})
    };

    onSignOut = () => {
        this.props.history.push('/home')
        this.setState({logged: false});
    };

    render() {
        return (
            <div>
                <NavBar
                    sign={this.state.logged}
                    onSignIn={()=> this.setState({signIn: true})}
                    onSignUp={()=> this.setState({signIn: true, signUp: true})}
                    onSignOut={this.onSignOut}
                />

                {this.props.children}

                <SignIn
                    open={this.state.signIn}
                    signUp={this.state.signUp}
                    onClose={()=> this.setState({signIn: false, signUp: false})}
                    onSignIn={this.onSignIn}
                    onSignUp={this.onSignUp}
                />
            </div>
        );
    }
}

export default withRouter(Main);
