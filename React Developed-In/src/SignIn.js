import React, {Component} from 'react';
import {Container, Modal, Header, Form, Button, Message} from 'semantic-ui-react'
import {connect} from "react-redux";
import {changeAccount} from "./redux/actions";

let initialState = {
    username: "",
    password: "",
    message: [],
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        console.log("SignIn", this.props);

        this.state = initialState;
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props) {
            this.props = nextProps
        }
    }

    handleSubmit = (event) => {
        let message = [];

        if(this.state.username === "") message.push("Username can't be empty!");
        if(this.state.password === "") message.push("Password can't be empty!");

        let found = false;
        for(let i = 0; i < this.props.accounts.length; i++) {
            if (this.props.accounts[i].username === this.state.username) {
                if (this.props.accounts[i].password === this.state.password) {
                    this.props.changeAccount(this.state.username);
                    this.props.onClose();
                }
                else {
                    message.push("Password is not correct!");
                }
                found = true;
                break;
            }
        }

        if(!found) {
            message.push("Username can't be found!");
        }
        this.setState({message: message})
    };

    render() {
        return (
            <Modal
                size='tiny' dimmer='inverted' open={this.props.open}
                onClose={()=> {this.setState(initialState); this.props.onClose()}}
            >
                <Modal.Header content='Sign In'/>
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
                        <Button
                            color='teal' fluid size='large' onClick={this.handleSubmit}
                        >Sign In</Button>
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

const mapStateToProps = (state) => {
    return {accounts: state.accounts};
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeAccount: (username) => {
            return dispatch(changeAccount(username))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
