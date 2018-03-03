import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Container, Sticky} from 'semantic-ui-react'
import { Item, Icon, Button, Card, Image, List } from 'semantic-ui-react'
import image from './img/app_detail.png'

const defaultProps = {
    user: null,
    status: "Pending for Approval",
    title: "Android implementation of the Messenger",
    description: "Description goes here...",
    content: "",
    image: image,
    skills: ["Java"],
    date: "Today",
    contact: "aaaa_xxxx_yyyy@163.com",
    type: "Android"
};

class ApplicationDetail extends Component {
    constructor(props) {
        super(props);

        this.skillColor = {"Java": "red", "PHP": "orange", "Ruby": "olive", "C#": "green", "Swift": "teal",
            "Python": "blue", "C++": "violet", "C": "purple", "HTML/CSS": "pink", "JavaScript": "brown"};

    }

    render() {
        return (
            <div className='applicationItem' style={{ marginTop: '52px', marginBottom: '52px'}}>
                <Container>
                    <Image style={{ marginBottom: '2em' }} src={this.props.image} fluid />
                    <Grid>
                        <Grid.Column width={12}>
                            <Header as='h1'>{this.props.title}</Header>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            {this.props.user === null ? (
                                <Button fluid color='grey' content="Apply"/>
                            ): (
                                <Button fluid color='teal' content="Go Chat"/>
                            )}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            {this.props.user === null ? (
                                <Button fluid basic color='grey' content="Save"/>
                            ): (
                                <Button fluid color='grey' content="Contract"/>
                            )}
                        </Grid.Column>
                    </Grid>
                    <List size='large'>
                        <List.Item>
                            <List.Icon name='time' />
                            <List.Content>Published on {this.props.date}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='mail'/>
                            <List.Content>Contact: {this.props.contact}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='android' />
                            <List.Content>{this.props.type}</List.Content>
                        </List.Item>
                    </List>
                    <p>{this.props.content}</p>
                </Container>
            </div>
        );
    }
}

ApplicationDetail.defaultProps = defaultProps;
export default ApplicationDetail;
