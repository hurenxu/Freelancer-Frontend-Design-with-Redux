import React, {Component} from 'react';
import {Grid, Header, Container, Button, Image, List} from 'semantic-ui-react'
import {connect} from "react-redux";
import Chat from './Chat'
import {addApplication} from "./redux/actions";

class ApplicationDetail extends Component {
    constructor(props) {
        super(props);
        console.log("ApplicationDetail", this.props);

        this.state={
            chat: false,
        };
        this.application = this.props.applications[parseInt(this.props.location.pathname.slice(-1))]
    }

    render() {
        return (
            <div className='applicationItem' style={{ marginTop: '52px', marginBottom: '52px'}}>
                <Container>
                    <Image style={{ marginBottom: '2em' }} src={this.application.image} fluid />
                    <Grid>
                        <Grid.Column width={14}>
                            <Header as='h1'>{this.application.title}</Header>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            {this.application.accounts.includes(this.props.account) ? (
                                <Button fluid color='teal' content="Go Chat"/>
                            ): (
                                <Button
                                    fluid color='grey' content="Apply"
                                    onClick={()=> this.props.addApplication(this.props.account, this.application)}
                                />
                            )}
                        </Grid.Column>
                    </Grid>
                    <List size='large'>
                        <List.Item>
                            <List.Icon name='time' />
                            <List.Content id='dateList'>Published on {this.application.date}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='mail'/>
                            <List.Content>Contact: {this.application.contact}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='android' />
                            <List.Content>{this.application.type}</List.Content>
                        </List.Item>
                    </List>
                    <p>{this.application.content}</p>
                </Container>
                <Chat
                    open={this.state.chat}
                    onClose={()=> this.setState({chat: false})}
                    contact={this.application.contact}
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
