// src/js/reducers/index.js

import { ADD_INFO } from "../constants/action-types";

const initialState = {
    Info: {
        Email: "Email",
        Search: "",
        Username: "Username",
        Password: "Password",
        RepeatPassword: "RepeatPassword",
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INFO:
            return Object.assign({}, state.Info, {
                Email: action.Email,
                Username: action.Username,
                Password: action.Password,
                RepeatPassword: action.RepeatPassword
            });
        default:
            return state;
    }
};

export default rootReducer;