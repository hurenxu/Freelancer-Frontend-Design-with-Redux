import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";
import ApplicationItem from "./ApplicationItem";
import {addApplication} from "./redux/actions";

class SearchPage extends Component {
    render() {
        return (
            <div className='applicationItem' style={{ marginTop: '2em', marginBottom: '2em'}}>
                <Container style={{ marginTop: '5em' }}>
                    {this.props.applications.map((application) =>
                        <ApplicationItem
                            key={application.id}
                            apply={()=> {this.props.addApplication(this.props.account, application)}}
                            application={application}
                        />
                    )}
                </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
