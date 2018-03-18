import React, { Component } from 'react';
import {Container, Message} from 'semantic-ui-react'
import { Form, Modal } from 'semantic-ui-react'
import { Header, Button } from 'semantic-ui-react'
import {changeAccount} from "./redux/actions";
import { connect } from "react-redux";
import {addAccount, loadAccount} from "./redux/ajax";

let initialState = {
    username: "",
    password: "",
    repeat: "",
    message: [],
};

class SignUp extends Component {
    constructor(props) {
        super(props);
        console.log("SignUp", this.props);

        this.state = initialState;
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props) {
            this.props = nextProps
        }
    }

    handleSubmit = (event) => {
        let message = [];
        if(this.state.username === "") {
            message.push("Username can't be empty!");
            this.setState({message: message});
            return
        }
        if(this.state.password === "") {
            message.push("Password can't be empty!");
            this.setState({message: message});
            return
        }
        if(this.state.repeat === "") {
            message.push("Please enter your password again!");
            this.setState({message: message});
            return
        }
        if(this.state.password !== this.state.repeat) {
            message.push("Password is not matching!");
            this.setState({message: message});
            return
        }


        let loadAccountPromise = loadAccount(this.state.username);
        loadAccountPromise.then(account => {
            if(account != null) {
                message.push("Username has been taken!");
                this.setState({message: message});
                return
            }

            let addAccountPromise = addAccount(this.state.username, this.state.password);
            addAccountPromise.then(account => {
                this.props.changeAccount(account);
                this.props.onClose();
            })

        }).catch(error => {
            throw(error);
        });
    };

    render() {
        return (
            <Modal
                size='tiny' dimmer='inverted' open={this.props.open}
                onClose={()=> {this.setState(initialState); this.props.onClose()}}
            >
                <Modal.Header content='Sign Up'/>
                <Container style={{width: '400px', marginTop: '2em', marginBottom: '2em'}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Developed-In
                    </Header>
                    <Form size='large'>
                        <Form.Input
                            fluid icon='user' iconPosition='left' placeholder='Username'
                            onChange={(e, {value})=> this.setState({username: value})}
                        />
                        <Form.Input
                            fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                            onChange={(e, {value})=> this.setState({password: value})}
                        />
                        <Form.Input
                            fluid icon='ellipsis horizontal' iconPosition='left' placeholder='Repeat Password' type='password'
                            onChange={(e, {value})=> this.setState({repeat: value})}
                        />
                        <Button
                            color='teal' fluid size='large' onClick={this.handleSubmit}
                        >Sign Up</Button>
                    </Form>
                    {this.state.message.length > 0 ? (
                        <Message
                            error
                            list={this.state.message}
                        />) : null
                    }
                </Container>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAccount: (account) => {
            return dispatch(changeAccount(account))
        },
    };
};

export default connect(null, mapDispatchToProps)(SignUp);
