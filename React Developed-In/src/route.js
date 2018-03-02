import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Main'
import DeveloperProfile from './DeveloperProfile'

const Routes = () => (
    <BrowserRouter>
        <Home>
            <Route path="/developer" component={DeveloperProfile} />
        </Home>
    </BrowserRouter>
);

export default Routes;