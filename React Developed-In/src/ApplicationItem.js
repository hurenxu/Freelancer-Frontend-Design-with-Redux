import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Container, Sticky} from 'semantic-ui-react'
import { Item, Icon, Button, Card, Image, Divider, Label } from 'semantic-ui-react'
import logo from './img/logo.svg'

const propTypes = {
    applied: PropTypes.boolean,
    name: PropTypes.string,
    description: PropTypes.string,
    skills : PropTypes.array,
    date: PropTypes.string,
};

const defaultProps = {
    applied: false,
    name: "Android implementation of the Messenger",
    description: "Description goes here...",
    skills: ["Java"],
    date: "Today",
};

class ApplicationItem extends Component {
    constructor(props) {
        super(props);

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
                                    <Item.Header as='a'>{this.props.name}</Item.Header>
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
                                    <Item.Meta>
                                        <Icon name='time' size='large'/>
                                        Published on {this.props.date}
                                    </Item.Meta>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='middle'>
                        {this.props.applied ? (
                            <div>
                                <Button style={{marginTop: '4px', marginBottom: '4px'}} fluid color='teal' content="Go Chat"/>
                                <Button style={{marginTop: '4px', marginBottom: '4px'}} fluid color='grey' content="Contract"/>
                            </div>
                        ) : (
                            <div>
                                <Button style={{marginTop: '4px', marginBottom: '4px'}} fluid color='grey' content="Apply"/>
                                <Button style={{marginTop: '4px', marginBottom: '4px'}} fluid basic color='grey' content="Save"/>
                            </div>
                        )}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

ApplicationItem.propTypes = propTypes;
ApplicationItem.defaultProps = defaultProps;

export default ApplicationItem;
