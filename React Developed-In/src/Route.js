import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Main from './Main'
import Home from './Home'
import DeveloperProfile from './DeveloperProfile'
import ApplicationDetail from './ApplicationDetail'

const Routes = () => (
    <BrowserRouter>
        <Main>
            <Route exact path="/home" component={Home} />
            <Route path="/developer" component={DeveloperProfile} />
            <Route path="/application" component={ApplicationDetail} />
        </Main>
    </BrowserRouter>
);

export default Routes;