import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {Container, Dropdown, Menu, Header, Button, Input} from 'semantic-ui-react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {changeAccount} from "./redux/actions";

class NavBar extends Component {
    constructor(props) {
        super(props);
        console.log("NavBar", this.props);

        this.state = {
            search: "",
            open: 0,
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props) {
            this.props = nextProps
        }
    }

    render() {
        return (
            <div className='NavBar'>
                <Menu size='large' borderless={true} fixed='top'>
                    <Container>
                        <Menu.Item><Header><Link to="/home">Developed-In</Link></Header></Menu.Item>
                        <Menu.Item position='right'>
                            <Input
                                action={{
                                    color: 'teal', content: 'Search',
                                    onClick: ()=> this.props.history.push("/search/" + this.state.search)
                                }}
                                placeholder='Search...'
                                onChange={(e, {value})=> this.setState({search: value})}
                            />
                        </Menu.Item>
                        {this.props.account === null ? (
                            <Menu.Item position='right'>
                                <Button
                                    as='a' onClick={()=>this.setState({open: 1})}
                                >Sign in</Button>
                                <Button
                                    style={{marginLeft: '0.5em'}}
                                    as='a' onClick={()=>this.setState({open: 2})}
                                >Sign Up</Button>
                            </Menu.Item>
                        ) : (
                            <Menu.Item position='right'>
                                <Dropdown
                                    className='icon' text={this.props.account.username} icon='user circle outline'
                                    labeled button
                                >
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            onClick={()=> {
                                                this.props.history.push('/developer');
                                            }}
                                        >My Profile</Dropdown.Item>

                                        <Dropdown.Item
                                            onClick={()=> {
                                                this.props.changeAccount("");
                                                this.props.history.push('/home');
                                            }}
                                        >Sign Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        )}
                    </Container>
                </Menu>
                <SignIn open={this.state.open === 1} onClose={()=> this.setState({open: 0})}/>
                <SignUp open={this.state.open === 2} onClose={()=> this.setState({open: 0})}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {account: state.account};
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeAccount: (username) => {
            return dispatch(changeAccount(username))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
