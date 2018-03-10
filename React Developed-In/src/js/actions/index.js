// src/js/actions/index.js

import { ADD_INFO } from "../constants/action-types";

export const addInfo = (Email, Search,
                        Username, Password,
                        RepeatPassword) => ({ type: ADD_INFO,
    Email, Search, Username, Password, RepeatPassword
});