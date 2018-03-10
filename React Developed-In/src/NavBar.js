import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import { Header, Button, Input} from 'semantic-ui-react'
import List from './js/components/List'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
        };
    }

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
                            <Input
                                action={{
                                    color: 'teal', content: 'Search',
                                    onClick: ()=> this.props.history.push('/search')
                                }}
                                placeholder='Search...'
                                onChange={(e, {value})=> this.setState({search: value})}
                            />
                        </Menu.Item>
                        {this.props.sign ? (
                            <Menu.Item position='right'>
                                <List history= {this.props.history}
                                      onSignOut={this.props.onSignOut} />
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
