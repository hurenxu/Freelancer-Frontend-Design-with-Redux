import React, {Component} from 'react';
import {Grid, Header, Container, Button, Image, List} from 'semantic-ui-react'
import {connect} from "react-redux";
import Chat from './Chat'
import {addApplication} from "./redux/actions";
import {loadApplications} from "./redux/ajax";

class ApplicationDetail extends Component {
    constructor(props) {
        super(props);
        console.log("ApplicationDetail", this.props);

        this.state={
            chat: false,
            application: null,
        };

        loadApplications(parseInt(this.props.location.pathname.slice(-1))).then((application)=> {
            this.setState({application: application});
            console.log(this.state);
        });
    }

    render() {
        return this.state.application === null ? (
            <div>Loading...</div>
        ) : (
            <div className='applicationItem' style={{ marginTop: '52px', marginBottom: '52px'}}>
                <Container>
                    <Image style={{ marginBottom: '2em' }} src={this.state.application.image} fluid />
                    <Grid>
                        <Grid.Column width={14}>
                            <Header as='h1'>{this.state.application.title}</Header>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            {this.state.application.accounts.includes(this.props.account) ? (
                                <Button fluid color='teal' content="Go Chat"/>
                            ): (
                                <Button
                                    fluid color='grey' content="Apply"
                                    onClick={()=> this.props.addApplication(this.props.account, this.state.application)}
                                />
                            )}
                        </Grid.Column>
                    </Grid>
                    <List size='large'>
                        <List.Item>
                            <List.Icon name='time' />
                            <List.Content id='dateList'>Published on {this.state.application.date}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='mail'/>
                            <List.Content>Contact: {this.state.application.contact}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='android' />
                            <List.Content>{this.state.application.type}</List.Content>
                        </List.Item>
                    </List>
                    <p>{this.state.application.content}</p>
                </Container>
                <Chat
                    open={this.state.chat}
                    onClose={()=> this.setState({chat: false})}
                    contact={this.state.application.contact}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account,
        applications: state.applications,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addApplication: (account, application) => {
            return dispatch(addApplication(account, application))
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationDetail);
