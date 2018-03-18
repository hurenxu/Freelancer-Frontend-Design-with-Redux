import {ADD_APPLICATION, CHANGE_ACCOUNT} from "./actions";
import {applicationData, accountData} from './database.js'
import {loadAccount} from "./ajax";

const initialState = {
    account: null,
    accounts: accountData,
    applications: applicationData,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACCOUNT:
            return Object.assign({}, state, {
                account: action.account,
            });
        case ADD_APPLICATION:
            let accounts = state.accounts.slice();
            let applications = state.applications.slice();

            for(let i = 0; i < accounts.length; i++) {
                if(accounts[i] === action.account) {
                    accounts[i].applications.push(action.application);
                    let index = accounts[i].suggestions.indexOf(action.application);
                    if (index !== -1) accounts[i].suggestions.splice(index, 1);
                }
            }

            for(let i = 0; i < applications.length; i++) {
                if (applications[i] === action.application) {
                    applications[i].accounts.push(action.account)
                }
            }

            return Object.assign({}, state, {
                accounts: accounts,
                applications: applications,
            });

        default:
            return state;
    }
};

export default rootReducer;