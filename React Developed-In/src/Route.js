import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from './Main'
import Home from './Home'
import DeveloperProfile from './DeveloperProfile'
import ApplicationDetail from './ApplicationDetail'
import SearchPage from './SearchPage'

const Routes = () => (
    <BrowserRouter>
        <Main>
            <Route exact path="/home" component={Home} />
            <Route path="/developer" component={DeveloperProfile} />
            <Route path="/application" component={ApplicationDetail} />
            <Route path="/search" component={SearchPage}/>
        </Main>
    </BrowserRouter>
);

export default Routes;