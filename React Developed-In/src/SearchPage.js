import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import logo from './img/fb.png'

const defaultProps = {
    skills: ["Java", "Andriod Studio", "JavaScript", "NPM"],
    jobLogos: ['./img/fb.png'],
    jobTitles: ['Android implementation of the Messenger'],
    descriptions: ["The Description of the App or Website goes here"],
    locations: ["@Facebook"],
    prices: ["$1000"]
};

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.skillColor = {"Java": "red", "PHP": "orange", "Ruby": "olive", "C#": "green", "Swift": "teal",
            "Python": "blue", "C++": "violet", "C": "purple", "HTML/CSS": "pink", "JavaScript": "brown"};
    }

    render() {
        return (
            <div className='searchPage' style={{ marginTop: '3em'}}>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
                <main role="main" className="container">
                    <div className="my-3 p-3 bg-white rounded box-shadow">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Search Results:</h6>
                        <div className="media text-muted py-3 border-bottom border-gray">
                            <Image className="align-self-center mx-3" src={logo} alt width={48} height={48} />
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-8">
                                        <a className="d-block my-2" href="/search">{this.props.jobTitles[0]}</a>
                                        <p className="d-block my-2">{this.props.descriptions[0]}</p>
                                        <div className="d-block my-2 d-flex">
                                            <div className="btn btn-outline-danger btn-sm mr-1">{this.props.skills[0]}</div>
                                            <div className="btn btn-outline-primary btn-sm mr-1">{this.props.skills[1]}</div>
                                            <div className="btn btn-outline-secondary btn-sm mr-1">{this.props.skills[2]}</div>
                                            <div className="btn btn-outline-secondary btn-sm mr-1">{this.props.skills[3]}</div>
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <p className="d-block my-0">{this.props.locations[0]}</p>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <p className="d-block my-0">{this.props.prices[0]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media text-muted py-3 border-bottom border-gray">
                            <Image className="align-self-center mx-3" src={logo} alt width={48} height={48} />
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-8">
                                        <a className="d-block my-2" href="/search">{this.props.jobTitles[0]}</a>
                                        <p className="d-block my-2">{this.props.descriptions[0]}</p>
                                        <div className="d-block my-2 d-flex">
                                            <div className="btn btn-outline-danger btn-sm mr-1">{this.props.skills[0]}</div>
                                            <div className="btn btn-outline-primary btn-sm mr-1">{this.props.skills[1]}</div>
                                            <div className="btn btn-outline-secondary btn-sm mr-1">{this.props.skills[2]}</div>
                                            <div className="btn btn-outline-secondary btn-sm mr-1">{this.props.skills[3]}</div>
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <p className="d-block my-0">{this.props.locations[0]}</p>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <p className="d-block my-0">{this.props.prices[0]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media text-muted py-3 border-bottom border-gray">
                            <Image className="align-self-center mx-3" src={logo} alt width={48} height={48} />
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-8">
                                        <a className="d-block my-2" href="/search">{this.props.jobTitles[0]}</a>
                                        <p className="d-block my-2">{this.props.descriptions[0]}</p>
                                        <div className="d-block my-2 d-flex">
                                            <div className="btn btn-outline-danger btn-sm mr-1">{this.props.skills[0]}</div>
                                            <div className="btn btn-outline-primary btn-sm mr-1">{this.props.skills[1]}</div>
                                            <div className="btn btn-outline-secondary btn-sm mr-1">{this.props.skills[2]}</div>
                                            <div className="btn btn-outline-secondary btn-sm mr-1">{this.props.skills[3]}</div>
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <p className="d-block my-0">{this.props.locations[0]}</p>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <p className="d-block my-0">{this.props.prices[0]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media text-muted py-3 border-bottom border-gray">
                            <Image className="align-self-center mx-3" src={logo} alt width={48} height={48} />
                            <div className="media-body">
                                <div className="row">
                                    <div className="col col-8">
                                        <a className="d-block my-2" href="/search">{this.props.jobTitles[0]}</a>
                                        <p className="d-block my-2">{this.props.descriptions[0]}</p>
                                        <div className="d-block my-2 d-flex">
                                            <div className="btn btn-outline-danger btn-sm mr-1">{this.props.skills[0]}</div>
                                            <div className="btn btn-outline-primary btn-sm mr-1">{this.props.skills[1]}</div>
                                            <div className="btn btn-outline-secondary btn-sm mr-1">{this.props.skills[2]}</div>
                                            <div className="btn btn-outline-secondary btn-sm mr-1">{this.props.skills[3]}</div>
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <p className="d-block my-0">{this.props.locations[0]}</p>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <p className="d-block my-0">{this.props.prices[0]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

SearchPage.defaultProps = defaultProps;
export default SearchPage;