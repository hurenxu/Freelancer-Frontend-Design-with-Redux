import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Route'
import { Provider } from "react-redux";
import store from "./js/store/index";
import { addInfo } from "./js/actions/index";

ReactDOM.render(<Provider store={store}>
    <Routes />
</Provider>, document.getElementById('root'));