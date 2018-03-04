import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Form, Modal} from 'semantic-ui-react'
import { Header, Button, Input} from 'semantic-ui-react'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Modal size='tiny' dimmer='inverted' open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header content={this.props.signUp ? 'Sign Up' : 'Sign In'}/>
                <Container style={{width: '400px', marginTop: '2em', marginBottom: '2em'}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Developed-In
                    </Header>
                    <Form size='large'>
                        {this.props.signUp ? (
                            <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' type='email'/>
                        ) : null}
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'/>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                        {this.props.signUp ? (
                            <Form.Input fluid icon='ellipsis horizontal' iconPosition='left' placeholder='Repeat Password' type='password'/>
                        ) : null}
                        {this.props.signUp ? (
                            <Button color='teal' fluid size='large' onClick={this.props.onSignUp}>
                                Sign Up
                            </Button>
                        ) : (
                            <Button color='teal' fluid size='large' onClick={this.props.onSignIn}>
                                Log in
                            </Button>
                        )}
                    </Form>
                </Container>
            </Modal>
        );
    }
}

export default SignIn;
