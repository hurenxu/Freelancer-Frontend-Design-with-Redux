import React, {Component} from 'react';
import {Grid, Header, Container, Button, Image, List} from 'semantic-ui-react'
import {connect} from "react-redux";
import Chat from './Chat'
import {addApplication} from "./redux/actions";
import {accountAddApplication, loadApplication} from "./redux/ajax";

class ApplicationDetail extends Component {
    constructor(props) {
        super(props);
        console.log("ApplicationDetail", this.props);

        this.state={
            chat: false,
            application: null,
        };

        this.id = parseInt(this.props.location.pathname.slice(-1), 10);
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
            <div className='applicationItem' style={{ marginTop: '52px', marginBottom: '52px'}}>
                <Container>
                    <Image style={{ marginBottom: '2em' }} src={this.state.application.image} fluid />
                    <Grid>
                        <Grid.Column width={14}>
                            <Header as='h1'>{this.state.application.title}</Header>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            {this.props.account === null || !this.props.account.applications.includes(this.id) ? (
                                <Button
                                    fluid color='grey' content="Apply"
                                    onClick={()=> this.onClickApply}
                                />
                            ): (
                                <Button fluid color='teal' content="Go Chat"/>
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addApplication: (account, id) => {
            return dispatch(addApplication(account, id))
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationDetail);
