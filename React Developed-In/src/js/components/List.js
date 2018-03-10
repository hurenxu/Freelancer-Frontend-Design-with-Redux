// src/js/components/List.js

import React, {Component} from "react";
import { connect } from "react-redux";
import { Dropdown} from 'semantic-ui-react';

const mapStateToProps = (Info) => {
    return { Info: Info };
};

class ConnectedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Info: {
                Email: "Email",
                    Search: "",
                    Username: "Username",
                    Password: "Password",
                    RepeatPassword: "RepeatPassword",
            }
        }
    }

    render() {
        return (
            <Dropdown
                className='icon' text={this.props.Info.Username} icon='user circle outline' labeled button
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
        );
    }
}

export default connect(mapStateToProps)(ConnectedList);