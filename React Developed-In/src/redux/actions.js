export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const CHANGE_ACCOUNT = "CHANGE_ACCOUNT";
export const ADD_APPLICATION = "ADD_APPLICATION"

export const addAccount = (username, password) => ({
    type: ADD_ACCOUNT,
    username,
    password,
});

export const changeAccount = (username) => ({
    type: CHANGE_ACCOUNT,
    username,
});

export const addApplication = (account, application) => ({
    type: ADD_APPLICATION,
    account,
    application,
});
