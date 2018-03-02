import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react'
import { Icon, Button, Input} from 'semantic-ui-react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import NavBar from './NavBar.js'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
        };
    }

    onSubmitLogin = () => {
        this.setState({logged: true})
    };

    onSubmitSignUp = () => {
        this.setState({logged: true})
    };
    onLogout = () => {
        this.setState({logged: false})
    };

    render() {
        return (
            <div>
                <NavBar
                    logged={this.state.logged}
                    onSubmitLogin={this.onSubmitLogin}
                    onSubmitSignUp={this.onSubmitSignUp}
                    onLogout={this.onLogout}
                />
                {this.props.children}
            </div>
        );
    }
}

export default Main;
