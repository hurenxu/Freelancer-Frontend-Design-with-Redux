import React, { Component } from 'react';
import { Grid, Header, Container, Sticky} from 'semantic-ui-react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import ApplicationItem from "./ApplicationItem"
import profile from './img/logo.svg'
import resume from './img/resume.jpg'

class DeveloperProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            suggestions: ["test"],
            applications: [],
            resume: resume,
            skills: ["Java"],
        };

        this.skillColor = {"Java": "red", "PHP": "orange", "Ruby": "olive", "C#": "green", "Swift": "teal",
            "Python": "blue", "C++": "violet", "C": "purple", "HTML/CSS": "pink", "JavaScript": "brown"}
    }

    onChangeTab = (e, {activeIndex}) => {
        this.setState({tabIndex: activeIndex})
    };

    render() {
        return (
            <div className='DeveloperProfile'>
                <Container style={{ marginTop: '7em' }}>
                    <Grid centered columns={2}>
                        <Grid.Column width={5}>
                            <Sticky offset={100}>
                                <Card fluid={true}>
                                    <Image src={profile} />
                                    <Card.Content>
                                        <Card.Header style={{ fontSize: '24px' }} textAlign='center'> Litao Qiao </Card.Header>
                                        <Card.Meta style={{ fontSize: '18px' }} textAlign='center'> Joined in 2015 </Card.Meta>
                                        <Card.Description style={{fontSize: '16px'}}>
                                            Personal Description goes here...
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Header as='h3'>Skills</Header>
                                        {this.state.skills.map((skill) => (
                                            <Button
                                                inverted
                                                key={skill.toString()}
                                                color={this.skillColor[skill]} content={skill}
                                            />
                                        ))}
                                    </Card.Content>
                                </Card>
                            </Sticky>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Tab
                                menu={{attached: true, tabular: true, widths: 3}}
                                onTabChange={this.onChangeTab}
                                activeIndex={this.state.tabIndex}
                                panes={[
                                    {menuItem: 'Suggestions',
                                        render: () =>
                                            <Tab.Pane>
                                                {this.state.suggestions.map((suggestion) => (
                                                    <ApplicationItem key={suggestion.toString()} />
                                                ))}
                                            </Tab.Pane>
                                    },
                                    {menuItem: 'Applications',
                                        render: () =>
                                            <Tab.Pane>
                                                {this.state.suggestions.map((suggestion) => (
                                                    <ApplicationItem
                                                        key={suggestion.toString()}
                                                        user="Joeyonng"
                                                    />
                                                ))}
                                            </Tab.Pane>
                                    },
                                    { menuItem: 'Resume',
                                        render: () => <Tab.Pane><Image src={resume}/></Tab.Pane>
                                    },
                                ]}

                            />
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default DeveloperProfile;
