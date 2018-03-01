import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Header, Button, Input} from 'semantic-ui-react'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }

    handleSearchChange = (e, {value}) => {
        this.setState({search: value});
    }

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
                            <Input icon='search' placeholder='Search...' onChange={this.handleSearchChange}/>
                        </Menu.Item>
                        {this.props.logged ? (
                            <Menu.Item position='right'>
                                <Dropdown className='icon' text='Joeyonng' icon='user circle outline' labeled button>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Important</Dropdown.Item>
                                        <Dropdown.Item>Announcement</Dropdown.Item>
                                        <Dropdown.Item>Discussion</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        ) : (
                            <Menu.Item position='right'>
                                <Button as='a'>Log in</Button>
                                <Button as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                            </Menu.Item>
                        )}
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default NavBar;
