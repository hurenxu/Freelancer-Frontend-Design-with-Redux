import {ADD_APPLICATION, CHANGE_ACCOUNT} from "./actions";

const initialState = {
    account: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACCOUNT:
            return Object.assign({}, state, {
                account: action.account,
            });
        case ADD_APPLICATION:
            let account = Object.assign({}, state.account);

            account.applications.push(action.id);
            let index = account.suggestions.indexOf(action.id);
            if (index !== -1) account.suggestions.splice(index, 1);

            return Object.assign({}, state, {
                account: account,
            });

        default:
            return state;
    }
};

export default rootReducer;