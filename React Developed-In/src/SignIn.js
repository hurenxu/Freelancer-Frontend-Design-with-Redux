import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Modal} from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import Form from './js/components/Form'

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal size='tiny' dimmer='inverted' open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header content={this.props.signUp ? 'Sign Up' : 'Sign In'}/>
                <Container style={{width: '400px', marginTop: '2em', marginBottom: '2em'}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Developed-In
                    </Header>
                    <Form signUp= {this.props.signUp}
                          onSignIn={this.props.onSignIn}
                          onSignUp={this.props.onSignUp} />
                </Container>
            </Modal>
        );
    }
}

export default SignIn;
