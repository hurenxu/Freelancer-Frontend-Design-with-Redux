import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { Menu, Dropdown, Form, Modal} from 'semantic-ui-react'
import { Header, Button, Input} from 'semantic-ui-react'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
        };
    }

    onSearchChange = (e, {value}) => {
        this.setState({search: value});
    };

    render() {
        return (
            <div className='NavBar'>
                <Menu size='large' borderless={true} fixed='top'>
                    <Container>
                        <Menu.Item><Header>
                            <Link to="/home">
                                Developed-In
                            </Link>
                        </Header></Menu.Item>
                        <Menu.Item as='a'>For Developers</Menu.Item>
                        <Menu.Item as='a'>For Companies</Menu.Item>
                        <Menu.Item position='right'>
                            <Input icon='search' placeholder='Search...' onChange={this.onSearchChange}/>
                        </Menu.Item>
                        {this.props.sign ? (
                            <Menu.Item position='right'>
                                <Dropdown
                                    className='icon' text='Joeyonng' icon='user circle outline' labeled button
                                >
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=> this.props.history.push('/developer')}>
                                            My Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={this.props.onSignOut}>
                                            Sign Out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        ) : (
                            <Menu.Item position='right'>
                                <Button as='a' onClick={this.props.onSignIn}>Sign in</Button>
                                <Button as='a' style={{ marginLeft: '0.5em' }} onClick={this.props.onSignUp}>Sign Up</Button>
                            </Menu.Item>
                        )}
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default withRouter(NavBar);
