import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { Item, Icon, Button, Image } from 'semantic-ui-react'
import Chat from './Chat'
import logo from './img/logo.svg'
import {connect} from "react-redux";
import {accountAddApplication, loadApplication} from "./redux/ajax";
import {addApplication} from "./redux/actions";

const skillColor = {"Java": "red", "PHP": "orange", "Ruby": "olive", "C#": "green", "Swift": "teal",
    "Python": "blue", "C++": "violet", "C": "purple", "HTML/CSS": "pink", "JavaScript": "brown"};

class ApplicationItem extends Component {
    constructor(props) {
        super(props);
        console.log("ApplicationItem", this.props);

        this.state={
            chat: false,
            application: null,
        };

        this.id = this.props.id;
        loadApplication(this.id).then((application)=> {
            this.setState({application: application});
        });
    }

    onClickApply = () => {
        this.props.addApplication(this.props.account, this.id);
        accountAddApplication(this.props.account, this.id);
    };

    render() {
        return this.state.application === null ? (
            <div>Loading...</div>
        ) : (
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
                                        <Link to={"/application/" + this.state.application.id}>
                                            {this.state.application.title}
                                        </Link>
                                    </Item.Header>
                                    <Item.Description>
                                        {this.state.application.description}
                                    </Item.Description>
                                    <Item.Extra>
                                        {this.state.application.skills.map((skill) => (
                                            <Button
                                                inverted size='mini'
                                                key={skill.toString()}
                                                color={skillColor[skill]} content={skill}
                                            />
                                        ))}
                                    </Item.Extra>
                                    {this.props.account === null || !this.props.account.applications.includes(this.id) ? (
                                        <Item.Meta id='itemStatus'>
                                            <Icon name='time' size='large'/>
                                            Published on {this.state.application.date}
                                        </Item.Meta>
                                    ) : (
                                        <Item.Meta id='itemStatus'>
                                            <Icon name='info circle' size='large'/>
                                            {this.state.application.status}
                                        </Item.Meta>
                                    )}
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='middle'>
                        {this.props.account === null || !this.props.account.applications.includes(this.id) ? (
                            <Button
                                style={{marginTop: '4px', marginBottom: '4px'}}
                                fluid color='grey' content="Apply"
                                onClick={this.onClickApply}
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

const mapStateToProps = (state) => {
    return {
        account: state.account,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addApplication: (account, id) => {
            return dispatch(addApplication(account, id))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationItem);
