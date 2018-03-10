// src/js/components/Form.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { addInfo } from "../actions/index";
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const mapDispatchToProps = (dispatch) => {
    return {
        addInfo: (Email, Search, Username, Password, RepeatPassword) =>
            dispatch(addInfo(Email, Search, Username, Password, RepeatPassword))
    };
};

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "Email",
            Search: "",
            Username: "Username",
            Password: "Password",
            RepeatPassword: "Repeat Password",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        if(this.props.signUp) {
            this.props.onSignUp();
        }
        else {
            this.props.onSignIn();
        }
        event.preventDefault();
        this.props.addInfo(this.state.Email, this.state.Search, this.state.Username, this.state.Password,
            this.state.RepeatPassword);
        this.setState({ Email: "Email",
            Search: "",
            Username: "Username",
            Password: "Password",
            RepeatPassword: "Repeat Password", });
    }

    render() {
        const { title } = this.state;
        return (
            <Form size='large'>
                {this.props.signUp ? (
                    <Form.Input fluid icon='mail' iconPosition='left' id="Email" value={title} type='email' onChange={this.handleChange}
                    />
                ) : null}
                <Form.Input fluid icon='user' iconPosition='left' id="Username" value={title} onChange={this.handleChange}/>
                <Form.Input fluid icon='lock' iconPosition='left' id="Password" value={title} type='password'  onChange={this.handleChange}/>
                {this.props.signUp ? (
                    <Form.Input fluid icon='ellipsis horizontal' iconPosition='left' id="RepeatPassword" value={title} type='password'
                                onChange={this.handleChange}/>
                ) : null}
                {this.props.signUp ? (
                    <Button color='teal' type="submit" fluid size='large' onClick={this.handleSubmit}>
                        Sign Up
                    </Button>
                ) : (
                    <Button color='teal' type="submit" fluid size='large' onClick={this.handleSubmit}>
                        Log in
                    </Button>
                )}
            </Form>
        );
    }
}
export default connect(null, mapDispatchToProps)(ConnectedForm);