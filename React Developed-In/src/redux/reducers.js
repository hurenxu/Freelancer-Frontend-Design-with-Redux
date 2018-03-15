import {ADD_ACCOUNT} from "./actions.js";
import {ADD_APPLICATION, CHANGE_ACCOUNT} from "./actions";
import {applicationData, accountData} from './database.js'

const initialState = {
    account: accountData[0],
    accounts: accountData,
    applications: applicationData,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT:
            let newAccount = {
                username: action.username,
                password: action.password,
                applications: [],
                suggestions: applicationData,
            };

            return Object.assign({}, state, {
                account: newAccount,
                accounts: [
                    ...state.accounts,
                    newAccount,
                ],
            });
        case CHANGE_ACCOUNT:
            let account = null;
            for(let i = 0; i < state.accounts.length; i++){
                if(state.accounts[i].username === action.username){
                    account = state.accounts[i]
                }
            }

            return Object.assign({}, state, {
                account: account,
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