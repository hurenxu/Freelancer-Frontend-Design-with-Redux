export const CHANGE_ACCOUNT = "CHANGE_ACCOUNT";
export const ADD_APPLICATION = "ADD_APPLICATION";

export const changeAccount = (account) => ({
    type: CHANGE_ACCOUNT,
    account,
});

export const addApplication = (account, application) => ({
    type: ADD_APPLICATION,
    account,
    application,
});
