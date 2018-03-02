import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Menu, Dropdown, Form, Modal} from 'semantic-ui-react'
import { Header, Button, Input} from 'semantic-ui-react'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            login: false,
            signUp: false,
        };
    }

    onSearchChange = (e, {value}) => {
        this.setState({search: value});
    }

    onClose = () => this.setState({login: false});
    onOpenLogin = () => this.setState({login: true, signUp: false});
    onOpenSignUp = () => this.setState({login: true, signUp: true});
    onSubmitLogin = () => {
        this.onClose();
        this.props.onSubmitLogin();
    };
    onSubmitSignUp = () => {
        this.onClose();
        this.props.onSubmitSignUp();
    };

    render() {
        return (
            <div className='NavBar'>
                <Menu size='large' borderless={true} fixed='top'>
                    <Container>
                        <Menu.Item><Header>Developed-In</Header></Menu.Item>
                        <Menu.Item as='a'>For Developers</Menu.Item>
                        <Menu.Item as='a'>For Companies</Menu.Item>
                        <Menu.Item as='a'>Showcase</Menu.Item>
                        <Menu.Item position='right'>
                            <Input icon='search' placeholder='Search...' onChange={this.onSearchChange}/>
                        </Menu.Item>
                        {this.props.logged ? (
                            <Menu.Item position='right'>
                                <Dropdown className='icon' text='Joeyonng' icon='user circle outline' labeled button>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Today's Suggestions</Dropdown.Item>
                                        <Dropdown.Item>My Applications</Dropdown.Item>
                                        <Dropdown.Item>My Resume</Dropdown.Item>
                                        <Dropdown.Item onClick={this.props.onLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        ) : (
                            <Menu.Item position='right'>
                                <Button as='a' onClick={this.onOpenLogin}>Log in</Button>
                                <Button as='a' style={{ marginLeft: '0.5em' }} onClick={this.onOpenSignUp}>Sign Up</Button>
                            </Menu.Item>
                        )}
                    </Container>
                </Menu>

                <Modal size='tiny' dimmer='inverted' open={this.state.login} onClose={this.onClose}>
                    <Modal.Header content={this.state.signUp ? 'Sign Up' : 'Log In'}/>
                    <Container style={{width: '400px', marginTop: '2em', marginBottom: '2em'}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Developed-In
                        </Header>
                        <Form size='large'>
                            {this.state.signUp ? (
                                <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' type='eamil'/>
                            ) : null}
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'/>
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                            {this.state.signUp ? (
                                <Form.Input fluid icon='ellipsis horizontal' iconPosition='left' placeholder='repeat Password' type='password'/>
                            ) : null}
                            {this.state.signUp ? (
                                <Button color='teal' fluid size='large' onClick={this.onSubmitSignUp}>
                                    Sign Up
                                </Button>
                            ) : (
                                <Button color='teal' fluid size='large' onClick={this.onSubmitLogin}>
                                    Log in
                                </Button>
                            )}
                        </Form>
                    </Container>
                </Modal>
            </div>
        );
    }
}

export default NavBar;
