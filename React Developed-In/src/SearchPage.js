import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";
import ApplicationItem from "./ApplicationItem";
import {loadSearchApplications} from "./redux/ajax";
import style from "./style/style.css"

class SearchPage extends Component {
    constructor() {
        super();

        this.state = {
            applications: []
        };

        loadSearchApplications().then((applications) => {
            this.setState({applications: applications});
        })
    }

    render() {
        return (
            <div className={style.body}>
                <Container>
                    {this.state.applications.map((application) =>
                        <ApplicationItem key={application.id} id={application.id}/>
                    )}
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

export default connect(mapStateToProps, null)(SearchPage);
