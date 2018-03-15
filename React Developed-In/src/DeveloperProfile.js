import React, { Component } from 'react';
import { Grid, Header, Container, Sticky} from 'semantic-ui-react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import ApplicationItem from "./ApplicationItem"
import profile from './img/logo.svg'
import resume from './img/resume.jpg'
import {addApplication} from "./redux/actions";
import {connect} from "react-redux";

const skillColor = {"Java": "red", "PHP": "orange", "Ruby": "olive", "C#": "green", "Swift": "teal",
    "Python": "blue", "C++": "violet", "C": "purple", "HTML/CSS": "pink", "JavaScript": "brown"}

class DeveloperProfile extends Component {
    constructor(props) {
        super(props);
        console.log("DeveloperProfile", this.props);

        this.state = {
            tabIndex: 0,
            suggestions: ["test"],
            applications: [],
            resume: resume,
            skills: ["Java"],
        };

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props) {
            this.props = nextProps
        }
    }

    onChangeTab = (e, {activeIndex}) => {
        this.setState({tabIndex: activeIndex})
    };

    render() {
        return (
            <div className='DeveloperProfile' style={{ marginTop: '2em', marginBottom: '2em'}}>
                <Container style={{ marginTop: '5em' }}>
                    <Grid centered columns={2}>
                        <Grid.Column width={5}>
                            <Sticky offset={100}>
                                <Card fluid={true}>
                                    <Image src={profile} />
                                    <Card.Content>
                                        <Card.Header style={{ fontSize: '24px' }} textAlign='center'>
                                            {this.props.account.username}
                                        </Card.Header>
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
                                                color={skillColor[skill]}
                                                content={skill}
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
                                                {this.props.account.suggestions.map((suggestion) =>
                                                    <ApplicationItem
                                                        key={suggestion.id}
                                                        apply={()=> {
                                                            this.props.addApplication(this.props.account, suggestion)
                                                        }}
                                                        application={suggestion}
                                                    />
                                                )}
                                            </Tab.Pane>
                                    },
                                    {menuItem: 'Applications',
                                        render: () =>
                                            <Tab.Pane>
                                                {this.props.account.applications.map((application) => (
                                                    <ApplicationItem
                                                        key={application.id}
                                                        application={application}
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

const mapStateToProps = (state) => {
    return {
        account: state.account,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addApplication: (account, application) => {
            return dispatch(addApplication(account, application))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperProfile);
