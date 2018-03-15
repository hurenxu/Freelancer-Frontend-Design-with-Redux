import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { Item, Icon, Button, Image } from 'semantic-ui-react'
import Chat from './Chat'
import logo from './img/logo.svg'

const skillColor = {"Java": "red", "PHP": "orange", "Ruby": "olive", "C#": "green", "Swift": "teal",
    "Python": "blue", "C++": "violet", "C": "purple", "HTML/CSS": "pink", "JavaScript": "brown"};

class ApplicationItem extends Component {
    constructor(props) {
        super(props);
        console.log("ApplicationItem", this.props);

        this.state={
            chat: false,
        };

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
                                        <Link to={"/application/" + this.props.application.id}>
                                            {this.props.application.title}
                                        </Link>
                                    </Item.Header>
                                    <Item.Description>
                                        {this.props.application.description}
                                    </Item.Description>
                                    <Item.Extra>
                                        {this.props.application.skills.map((skill) => (
                                            <Button
                                                inverted size='mini'
                                                key={skill.toString()}
                                                color={skillColor[skill]} content={skill}
                                            />
                                        ))}
                                    </Item.Extra>
                                    {this.props.apply !== undefined ? (
                                        <Item.Meta id='itemStatus'>
                                            <Icon name='time' size='large'/>
                                            Published on {this.props.application.date}
                                        </Item.Meta>
                                    ) : (
                                        <Item.Meta id='itemStatus'>
                                            <Icon name='info circle' size='large'/>
                                            {this.props.application.status}
                                        </Item.Meta>
                                    )}
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='middle'>
                        {this.props.apply !== undefined ? (
                            <Button
                                style={{marginTop: '4px', marginBottom: '4px'}}
                                fluid color='grey' content="Apply"
                                onClick={()=> this.props.apply()}
                            />
                        ) : (
                            <Button
                                style={{marginTop: '4px', marginBottom: '4px'}}
                                fluid color='teal' content="Go Chat"
                                onClick={()=> this.setState({chat: true})}
                            />
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

export default ApplicationItem;
