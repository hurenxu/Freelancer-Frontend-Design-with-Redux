import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Route'
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

let store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));