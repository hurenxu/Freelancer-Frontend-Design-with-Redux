import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react'
import { Icon, Button, Input} from 'semantic-ui-react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import NavBar from './NavBar.js'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <NavBar/>
        );
    }
}

export default Main;
