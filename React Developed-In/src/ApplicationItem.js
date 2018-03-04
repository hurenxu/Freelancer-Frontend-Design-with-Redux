import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Grid, Header, Container, Sticky} from 'semantic-ui-react'
import { Item, Icon, Button, Card, Image, Divider, Label } from 'semantic-ui-react'
import Chat from './Chat'
import logo from './img/logo.svg'

const defaultProps = {
    user: null,
    name: "Android implementation of the Messenger",
    description: "Description goes here...",
    skills: ["Java"],
    date: "Today",
    status: "Pending for Approval"
};

class ApplicationItem extends Component {
    constructor(props) {
        super(props);

        this.state={
            chat: false,
        };

        this.skillColor = {"Java": "red", "PHP": "orange", "Ruby": "olive", "C#": "green", "Swift": "teal",
            "Python": "blue", "C++": "violet", "C": "purple", "HTML/CSS": "pink", "JavaScript": "brown"};
    }

    render() {
        return (
            <div className='applicationItem' style={{ marginTop: '2em', marginBottom: '2em'}}>
                <Grid>
                    <Grid.Column width={3} verticalAlign='middle'>
                        <Image src={logo} />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        <Link to="/application">{this.props.name}</Link>
                                    </Item.Header>
                                    <Item.Description>{this.props.description}</Item.Description>
                                    <Item.Extra>
                                        {this.props.skills.map((skill) => (
                                            <Button
                                                inverted size='mini'
                                                key={skill.toString()}
                                                color={this.skillColor[skill]} content={skill}
                                            />
                                        ))}
                                    </Item.Extra>
                                    {this.props.user === null ? (
                                        <Item.Meta id='itemStatus'>
                                            <Icon name='time' size='large'/>
                                            Published on {this.props.date}
                                        </Item.Meta>
                                    ) : (
                                        <Item.Meta id='itemStatus'>
                                            <Icon name='info circle' size='large'/>
                                            {this.props.status}
                                        </Item.Meta>
                                    )}
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='middle'>
                        {this.props.user === null ? (
                            <div>
                                <Button
                                    style={{marginTop: '4px', marginBottom: '4px'}}
                                    fluid color='grey' content="Apply"
                                />
                            </div>
                        ) : (
                            <div>
                                <Button
                                    style={{marginTop: '4px', marginBottom: '4px'}}
                                    fluid color='teal' content="Go Chat"
                                    onClick={()=> this.setState({chat: true})}
                                />
                                <Button
                                    style={{marginTop: '4px', marginBottom: '4px'}}
                                    fluid color='grey' content="Contract"
                                />
                            </div>
                        )}
                    </Grid.Column>
                    <Chat
                        open={this.state.chat}
                        onClose={()=> this.setState({chat: false})}
                        contact="FaceBook"
                    />
                </Grid>
            </div>
        );
    }
}

ApplicationItem.defaultProps = defaultProps;
export default ApplicationItem;
